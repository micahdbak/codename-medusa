import * as THREE from 'three';
import { smoothedHeadPose } from './headPose.js';
import { mesh, createFaceMesh, updateMesh } from './faceModelRenderer.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0x000000, 1, 100); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // color, intensity
scene.add(ambientLight);

// Directional light – acts like sunlight, casting shadows and highlights
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(0, 0, 0); // position in world space
directionalLight.castShadow = true; // enable shadows if needed
scene.add(directionalLight);
scene.add(directionalLight.target);

const video = document.createElement('video');
video.src = '/walls4.mp4';
video.loop = true;
video.muted = true;
video.play();

const baseTexture = new THREE.VideoTexture(video);
baseTexture.wrapS = THREE.RepeatWrapping;
baseTexture.wrapT = THREE.RepeatWrapping;
baseTexture.magFilter = THREE.NearestFilter;

const tunnelWidth = 20;
const tunnelLength = 200;

const floorCeilingGeo = new THREE.PlaneGeometry(tunnelWidth, tunnelLength);
const wallGeo = new THREE.PlaneGeometry(tunnelLength, tunnelWidth);

const floorTexture = baseTexture.clone();
floorTexture.needsUpdate = true;
floorTexture.repeat.set(4, 20);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x404040, map: floorTexture });
const floor = new THREE.Mesh(floorCeilingGeo, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -tunnelWidth / 2;
scene.add(floor);

const ceilingTexture = baseTexture.clone();
ceilingTexture.needsUpdate = true;
ceilingTexture.repeat.set(4, 20);
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0x404040, map: ceilingTexture });
const ceiling = new THREE.Mesh(floorCeilingGeo, ceilingMaterial);
ceiling.rotation.x = Math.PI / 2;
ceiling.position.y = tunnelWidth / 2;
scene.add(ceiling);

const leftWallTexture = baseTexture.clone();
leftWallTexture.needsUpdate = true;
leftWallTexture.repeat.set(20, 4);
const leftWallMaterial = new THREE.MeshBasicMaterial({ color: 0x404040, map: leftWallTexture });
const leftWall = new THREE.Mesh(wallGeo, leftWallMaterial);
leftWall.rotation.y = Math.PI / 2;
leftWall.position.x = -tunnelWidth / 2;
scene.add(leftWall);

const rightWallTexture = baseTexture.clone();
rightWallTexture.needsUpdate = true;
rightWallTexture.repeat.set(20, 4);
const rightWallMaterial = new THREE.MeshBasicMaterial({ color: 0x404040, map: rightWallTexture });
const rightWall = new THREE.Mesh(wallGeo, rightWallMaterial);
rightWall.rotation.y = -Math.PI / 2;
rightWall.position.x = tunnelWidth / 2;
scene.add(rightWall);

createFaceMesh();
scene.add(mesh);

const items = [];

function createParallaxItem(x, y, z) {
    const itemGroup = new THREE.Group();
    const itemGeometry = new THREE.SphereGeometry(2, 32, 16);
    const itemMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const item = new THREE.Mesh(itemGeometry, itemMaterial);
    item.position.set(x, y, z);
    itemGroup.add(item);
    scene.add(itemGroup);
    items.push(item);
}

createParallaxItem(5, 5, -30);
createParallaxItem(-2, 2, -40);
createParallaxItem(7, 5, -50);


const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
};

window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() in keys) {
        keys[e.key.toLowerCase()] = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() in keys) {
        keys[e.key.toLowerCase()] = false;
    }
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const fullscreenButton = document.getElementById('fullscreen-button');
fullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});

function distance3D(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

const cameraBasePosition = new THREE.Vector3(0, 0, 0);
const moveSpeed = 0.3;

function animate() {
    // Keyboard movement
    if (true) cameraBasePosition.z -= moveSpeed; // always move forward
    if (keys.s) cameraBasePosition.z += moveSpeed;
    if (keys.a) cameraBasePosition.x -= moveSpeed;
    if (keys.d) cameraBasePosition.x += moveSpeed;

    if (cameraBasePosition.z < -50) {
      cameraBasePosition.z = 0;

      let dist = 30;
      for (const item of items) {
        item.position.x = Math.random() * 10 - 5;
        item.position.y = Math.random() * 10 - 5;
        item.position.z = -dist;
        dist += 10;
      }
    }

    // Head pose movement (as an offset)
    const zOffset = smoothedHeadPose.z * -10;
    const targetX = smoothedHeadPose.x * -10;
    const targetY = smoothedHeadPose.y * 10;

    const halfWidth = tunnelWidth / 2;
    const margin = 1;

    // Combine base position with head pose offset
    camera.position.x = THREE.MathUtils.clamp(cameraBasePosition.x + targetX, -halfWidth + margin, halfWidth - margin);
    camera.position.y = THREE.MathUtils.clamp(cameraBasePosition.y + targetY, -halfWidth + margin, halfWidth - margin);
    camera.position.z = cameraBasePosition.z + zOffset;

    camera.rotation.y = smoothedHeadPose.x * -0.5;
    camera.rotation.x = smoothedHeadPose.y * -0.5;

    for (const item of items) {
      if (distance3D(
        { x: camera.position.x, y: camera.position.y, z: camera.position.z - 2 },
        { x: item.position.x, y: item.position.y, z: item.position.z }) < 3.0) {
        window.location.href = "/game_over.html";
        return;
      }
    }

    updateMesh();

    mesh.position.x = camera.position.x;
    mesh.position.y = camera.position.y;
    mesh.position.z = camera.position.z - 2;

    // Make the light follow the camera
    directionalLight.position.copy(camera.position);

    // Point the light in the same direction the camera is facing
    const targetPosition = new THREE.Vector3();
    camera.getWorldDirection(targetPosition);
    targetPosition.add(camera.position);

    directionalLight.target.position.copy(targetPosition);
    directionalLight.target.updateMatrixWorld();

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);