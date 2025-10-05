import * as THREE from 'three';
import { initFaceLandmark, updateFaceLandmarks } from './faceLandmark.js';
import { updateHeadPose, smoothedHeadPose } from './headPose.js';

const SCENE_CONFIG = {
    backgroundColor: 0x888888,
    cameraFOV: 50,
    cameraNear: 0.1,
    cameraFar: 1000,
    cameraInitialZ: 10,
};

const LIGHT_CONFIG = {
    ambientColor: 0xffffff,
    ambientIntensity: 0.6,
    pointColor: 0xffffff,
    pointIntensity: 0.8,
    pointDistance: 100,
};

const STAIRCASE_CONFIG = {
    panelCount: 15,
    panelDepth: 2,
    panelThickness: 0.2,
    initialSize: 20,
    sizeDecrement: 1.2,
    frameWidth: 1.0,
    material: new THREE.MeshStandardMaterial({
        color: 0x999999
    }),
};

const PARALLAX_CONFIG = {
    multiplierX: 8,
    multiplierY: 8,
    smoothing: 0.1,
};

let scene, camera, renderer, pointLight, staircaseGroup;

function setupScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(SCENE_CONFIG.backgroundColor);

    camera = new THREE.PerspectiveCamera(
        SCENE_CONFIG.cameraFOV,
        window.innerWidth / window.innerHeight,
        SCENE_CONFIG.cameraNear,
        SCENE_CONFIG.cameraFar
    );
    camera.position.z = SCENE_CONFIG.cameraInitialZ;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function setupLighting() {
    const ambientLight = new THREE.AmbientLight(
        LIGHT_CONFIG.ambientColor,
        LIGHT_CONFIG.ambientIntensity
    );
    scene.add(ambientLight);

    pointLight = new THREE.PointLight(
        LIGHT_CONFIG.pointColor,
        LIGHT_CONFIG.pointIntensity,
        LIGHT_CONFIG.pointDistance
    );
    pointLight.position.set(0, 0, camera.position.z * 0.5);
    scene.add(pointLight);
}

function createStaircase() {
    staircaseGroup = new THREE.Group();
    const {
        panelCount,
        panelDepth,
        panelThickness,
        initialSize,
        sizeDecrement,
        frameWidth,
        material
    } = STAIRCASE_CONFIG;

    for (let i = 0; i < panelCount; i++) {
        const size = initialSize - i * sizeDecrement;
        if (size <= 0) break;

        const frameShape = new THREE.Shape();
        const halfSize = size / 2;
        frameShape.moveTo(-halfSize, -halfSize);
        frameShape.lineTo(halfSize, -halfSize);
        frameShape.lineTo(halfSize, halfSize);
        frameShape.lineTo(-halfSize, halfSize);
        frameShape.lineTo(-halfSize, -halfSize);

        const holeSize = size - frameWidth;
        const halfHoleSize = holeSize / 2;
        const holePath = new THREE.Path();
        holePath.moveTo(-halfHoleSize, -halfHoleSize);
        holePath.lineTo(halfHoleSize, -halfHoleSize);
        holePath.lineTo(halfHoleSize, halfHoleSize);
        holePath.lineTo(-halfHoleSize, halfHoleSize);
        holePath.lineTo(-halfHoleSize, -halfHoleSize);
        frameShape.holes.push(holePath);

        const geometry = new THREE.ExtrudeGeometry(frameShape, {
            depth: panelThickness,
            bevelEnabled: false,
        });
        const panel = new THREE.Mesh(geometry, material);
        panel.position.z = -i * panelDepth;

        staircaseGroup.add(panel);
    }
    scene.add(staircaseGroup);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

async function main() {
    await initFaceLandmark();

    setupScene();
    setupLighting();
    createStaircase();

    window.addEventListener('resize', onWindowResize);

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    updateFaceLandmarks();
    updateHeadPose();

    const { multiplierX, multiplierY, smoothing } = PARALLAX_CONFIG;
    const targetX = smoothedHeadPose.x * -multiplierX;
    const targetY = smoothedHeadPose.y * multiplierY;

    camera.position.x += (targetX - camera.position.x) * smoothing;
    camera.position.y += (targetY - camera.position.y) * smoothing;

    camera.lookAt(0, 0, 0);

    pointLight.position.x = camera.position.x;
    pointLight.position.y = camera.position.y;
    pointLight.position.z = camera.position.z * 0.5;

    renderer.render(scene, camera);
}

main();