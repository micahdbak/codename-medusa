import * as THREE from 'three';
import { initFaceLandmark, updateFaceLandmarks } from './faceLandmark.js';
import { updateHeadPose, smoothedHeadPose, displayPose } from './headPose.js';
import { createFaceMesh, createEyes, createTongue, updateMesh, mesh, leftEye, rightEye, leftPupil, rightPupil, tongue } from './faceModel.js';

// --- Configuration ---
const CONFIG = {
    scene: {
        backgroundColor: 0x000000,
        fogNear: 1,
        fogFar: 100,
    },
    camera: {
        fov: 75,
        near: 0.1,
        far: 1000,
    },
    lighting: {
        ambientColor: 0xffffff,
        ambientIntensity: 0.5,
        directionalColor: 0xffffff,
        directionalIntensity: 1.0,
    },
    tunnel: {
        videoSrc: '/walls4.mp4',
        width: 20,
        length: 200,
        resetZ: -50,
    },
    player: {
        moveSpeed: 0.3,
        headPoseMultiplierX: -10,
        headPoseMultiplierY: 10,
        headPoseMultiplierZ: -10,
        headRotationMultiplierX: -0.5,
        headRotationMultiplierY: -0.5,
    },
    item: {
        count: 3,
        initialSpawnZ: -30,
        spawnZIncrement: -10,
        collisionRadius: 2.5,
    }
};

// --- Global State ---
let scene, camera, renderer, directionalLight, faceModelGroup;
const gameState = {
    isGameOver: false,
    cameraBasePosition: new THREE.Vector3(0, 0, 0),
    items: [],
    keys: { w: false, a: false, s: false, d: false },
};
let poseContainer, gameOverOverlay;


function setupScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.scene.backgroundColor);
    scene.fog = new THREE.Fog(CONFIG.scene.backgroundColor, CONFIG.scene.fogNear, CONFIG.scene.fogFar);

    camera = new THREE.PerspectiveCamera(CONFIG.camera.fov, window.innerWidth / window.innerHeight, CONFIG.camera.near, CONFIG.camera.far);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function setupLighting() {
    const ambientLight = new THREE.AmbientLight(CONFIG.lighting.ambientColor, CONFIG.lighting.ambientIntensity);
    scene.add(ambientLight);

    directionalLight = new THREE.DirectionalLight(CONFIG.lighting.directionalColor, CONFIG.lighting.directionalIntensity);
    directionalLight.position.set(0, 0, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    scene.add(directionalLight.target);
}

function createTunnel() {
    const video = document.createElement('video');
    video.src = CONFIG.tunnel.videoSrc;
    video.loop = true;
    video.muted = true;
    video.play();

    const baseTexture = new THREE.VideoTexture(video);
    baseTexture.wrapS = THREE.RepeatWrapping;
    baseTexture.wrapT = THREE.RepeatWrapping;
    baseTexture.magFilter = THREE.NearestFilter;

    const createWall = (geometry, material, position, rotation) => {
        const wall = new THREE.Mesh(geometry, material);
        wall.position.copy(position);
        wall.rotation.copy(rotation);
        scene.add(wall);
        return wall;
    };

    const floorCeilingGeo = new THREE.PlaneGeometry(CONFIG.tunnel.width, CONFIG.tunnel.length);
    const wallGeo = new THREE.PlaneGeometry(CONFIG.tunnel.length, CONFIG.tunnel.width);

    const floorTexture = baseTexture.clone();
    floorTexture.needsUpdate = true;
    floorTexture.repeat.set(4, 20);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x404040, map: floorTexture });
    createWall(floorCeilingGeo, floorMaterial, new THREE.Vector3(0, -CONFIG.tunnel.width / 2, 0), new THREE.Euler(-Math.PI / 2, 0, 0));

    const ceilingTexture = baseTexture.clone();
    ceilingTexture.needsUpdate = true;
    ceilingTexture.repeat.set(4, 20);
    const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0x404040, map: ceilingTexture });
    createWall(floorCeilingGeo, ceilingMaterial, new THREE.Vector3(0, CONFIG.tunnel.width / 2, 0), new THREE.Euler(Math.PI / 2, 0, 0));

    const leftWallTexture = baseTexture.clone();
    leftWallTexture.needsUpdate = true;
    leftWallTexture.repeat.set(20, 4);
    const leftWallMaterial = new THREE.MeshBasicMaterial({ color: 0x404040, map: leftWallTexture });
    createWall(wallGeo, leftWallMaterial, new THREE.Vector3(-CONFIG.tunnel.width / 2, 0, 0), new THREE.Euler(0, Math.PI / 2, 0));

    const rightWallTexture = baseTexture.clone();
    rightWallTexture.needsUpdate = true;
    rightWallTexture.repeat.set(20, 4);
    const rightWallMaterial = new THREE.MeshBasicMaterial({ color: 0x404040, map: rightWallTexture });
    createWall(wallGeo, rightWallMaterial, new THREE.Vector3(CONFIG.tunnel.width / 2, 0, 0), new THREE.Euler(0, -Math.PI / 2, 0));
}

function createPlayerModel() {
    createFaceMesh();
    createEyes();
    createTongue();
    faceModelGroup = new THREE.Group();
    faceModelGroup.add(mesh); // Add other parts if needed: leftEye, rightEye, etc.
    scene.add(faceModelGroup);
}

function createItems() {
    const itemGeometry = new THREE.SphereGeometry(2, 32, 16);
    const itemMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    for (let i = 0; i < CONFIG.item.count; i++) {
        const item = new THREE.Mesh(itemGeometry, itemMaterial);
        scene.add(item);
        gameState.items.push(item);
    }
}

function resetItems() {
    let zPos = CONFIG.item.initialSpawnZ;
    for (const item of gameState.items) {
        item.position.x = Math.random() * 10 - 5;
        item.position.y = Math.random() * 10 - 5;
        item.position.z = zPos;
        zPos += CONFIG.item.spawnZIncrement;
    }
}

function setupControlsAndUI() {
    window.addEventListener('keydown', (e) => { if (e.key.toLowerCase() in gameState.keys) gameState.keys[e.key.toLowerCase()] = true; });
    window.addEventListener('keyup', (e) => { if (e.key.toLowerCase() in gameState.keys) gameState.keys[e.key.toLowerCase()] = false; });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const fullscreenButton = document.getElementById('fullscreen-button');
    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    poseContainer = document.getElementById('head-pose-container');
    gameOverOverlay = document.getElementById('game-over-overlay');
}

function restartGame() {
    gameOverOverlay.style.display = 'none';
    gameState.cameraBasePosition.set(0, 0, 0);
    resetItems();
    gameState.isGameOver = false;
    renderer.setAnimationLoop(animate);
}

function updatePlayerPosition() {
    // Keyboard movement
    if (true) gameState.cameraBasePosition.z -= CONFIG.player.moveSpeed; // Always move forward
    if (gameState.keys.s) gameState.cameraBasePosition.z += CONFIG.player.moveSpeed;
    if (gameState.keys.a) gameState.cameraBasePosition.x -= CONFIG.player.moveSpeed;
    if (gameState.keys.d) gameState.cameraBasePosition.x += CONFIG.player.moveSpeed;

    // Head pose movement (as an offset)
    const targetX = smoothedHeadPose.x * CONFIG.player.headPoseMultiplierX;
    const targetY = smoothedHeadPose.y * CONFIG.player.headPoseMultiplierY;
    const zOffset = smoothedHeadPose.z * CONFIG.player.headPoseMultiplierZ;

    // Clamp position within the tunnel
    const margin = 1;
    const halfWidth = CONFIG.tunnel.width / 2;
    camera.position.x = THREE.MathUtils.clamp(gameState.cameraBasePosition.x + targetX, -halfWidth + margin, halfWidth - margin);
    camera.position.y = THREE.MathUtils.clamp(gameState.cameraBasePosition.y + targetY, -halfWidth + margin, halfWidth - margin);
    camera.position.z = gameState.cameraBasePosition.z + zOffset;

    // Head rotation
    camera.rotation.y = smoothedHeadPose.x * CONFIG.player.headRotationMultiplierY;
    camera.rotation.x = smoothedHeadPose.y * CONFIG.player.headRotationMultiplierX;
}

function checkCollisions() {
    for (const item of gameState.items) {
        if (camera.position.distanceTo(item.position) < CONFIG.item.collisionRadius) {
            if (!gameState.isGameOver) {
                gameState.isGameOver = true;
                gameOverOverlay.style.display = 'flex';
                renderer.setAnimationLoop(null);
                setTimeout(restartGame, 2000);
            }
            return;
        }
    }
}

function updateWorld() {
    // Reset tunnel position
    if (gameState.cameraBasePosition.z < CONFIG.tunnel.resetZ) {
        gameState.cameraBasePosition.z = 0;
        resetItems();
    }

    // Position face model in front of camera
    faceModelGroup.position.set(camera.position.x, camera.position.y, camera.position.z - 2);
    faceModelGroup.rotation.copy(camera.rotation);

    // Update light to follow camera
    directionalLight.position.copy(camera.position);
    const targetPosition = new THREE.Vector3();
    camera.getWorldDirection(targetPosition);
    targetPosition.add(camera.position);
    directionalLight.target.position.copy(targetPosition);
    directionalLight.target.updateMatrixWorld();
}

function animate() {
    // Update face tracking
    updateFaceLandmarks();
    updateHeadPose();
    updateMesh();
    displayPose(poseContainer);

    updatePlayerPosition();
    checkCollisions();
    if (gameState.isGameOver) return;

    updateWorld();

    renderer.render(scene, camera);
}

async function main() {
    await initFaceLandmark();

    setupScene();
    setupLighting();
    createTunnel();
    createPlayerModel();
    createItems();
    setupControlsAndUI();

    restartGame(); // Start the game
}

main();