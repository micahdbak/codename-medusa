import * as THREE from 'three';
import { initFaceLandmark, updateFaceLandmarks } from './faceLandmark.js';
import { updateHeadPose, smoothedHeadPose, displayPose } from './headPose.js';
import { createFaceMesh, createEyes, createTongue, updateMesh, mesh, leftEye, rightEye, leftPupil, rightPupil, tongue } from './faceModel.js';

async function main() {
    // --- Initialization ---
    await initFaceLandmark();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 1, 100);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(0, 0, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    // --- Tunnel ---
    const video = document.createElement('video');
    video.src = '/walls4.mp4'; // Make sure this video file is in your public folder
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

    // --- Face Model ---
    createFaceMesh();
    createEyes();
    createTongue();
    const faceModelGroup = new THREE.Group();
    faceModelGroup.add(mesh, leftEye, rightEye, leftPupil, rightPupil, tongue);
    scene.add(faceModelGroup);

    // --- Items ---
    const items = [];
    function createParallaxItem(x, y, z) {
        const itemGeometry = new THREE.SphereGeometry(2, 32, 16);
        const itemMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
        const item = new THREE.Mesh(itemGeometry, itemMaterial);
        item.position.set(x, y, z);
        scene.add(item);
        items.push(item);
    }
    createParallaxItem(5, 5, -30);
    createParallaxItem(-2, 2, -40);
    createParallaxItem(7, 5, -50);

    // --- Controls & UI ---
    const keys = { w: false, a: false, s: false, d: false };
    window.addEventListener('keydown', (e) => { if (e.key.toLowerCase() in keys) keys[e.key.toLowerCase()] = true; });
    window.addEventListener('keyup', (e) => { if (e.key.toLowerCase() in keys) keys[e.key.toLowerCase()] = false; });

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

    const poseContainer = document.getElementById('head-pose-container');
    const gameOverOverlay = document.getElementById('game-over-overlay');

    // --- Game State ---
    const cameraBasePosition = new THREE.Vector3(0, 0, 0);
    const moveSpeed = 0.3;
    let isGameOver = false;

    function distance3D(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    function restartGame() {
        gameOverOverlay.style.display = 'none';
        cameraBasePosition.set(0, 0, 0);
        let dist = 30;
        for (const item of items) {
            item.position.x = Math.random() * 10 - 5;
            item.position.y = Math.random() * 10 - 5;
            item.position.z = -dist;
            dist += 10;
        }
        isGameOver = false;
        renderer.setAnimationLoop(animate);
    }

    // --- Animation Loop ---
    function animate() {
        // Update face tracking
        updateFaceLandmarks();
        updateHeadPose();
        updateMesh();
        displayPose(poseContainer);

        // Keyboard movement
        if (true) cameraBasePosition.z -= moveSpeed; // always move forward
        if (keys.s) cameraBasePosition.z += moveSpeed;
        if (keys.a) cameraBasePosition.x -= moveSpeed;
        if (keys.d) cameraBasePosition.x += moveSpeed;

        // Reset tunnel
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

        // Collision detection
        for (const item of items) {
            if (distance3D(
                { x: camera.position.x, y: camera.position.y, z: camera.position.z - 2 },
                { x: item.position.x, y: item.position.y, z: item.position.z }
            ) < 3.0) {
                if (!isGameOver) {
                    isGameOver = true;
                    gameOverOverlay.style.display = 'flex';
                    renderer.setAnimationLoop(null);
                    setTimeout(restartGame, 2000);
                }
                return;
            }
        }


        // Position face model in front of camera
        faceModelGroup.position.set(camera.position.x, camera.position.y, camera.position.z - 2);
        faceModelGroup.rotation.set(camera.rotation.x, camera.rotation.y, camera.rotation.z);

        // Update light to follow camera
        directionalLight.position.copy(camera.position);
        const targetPosition = new THREE.Vector3();
        camera.getWorldDirection(targetPosition);
        targetPosition.add(camera.position);
        directionalLight.target.position.copy(targetPosition);
        directionalLight.target.updateMatrixWorld();

        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);
}

main();