import * as THREE from 'three';
import { FaceLandmarker } from '@mediapipe/tasks-vision';
import { latestLandmarks, video } from './faceLandmark.js';

let container;
let renderer;
let scene;
let camera;
export let mesh;

function setupScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 1.5;

    renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        preserveDrawingBuffer: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
}

function setupLighting() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);
    
    const front = new THREE.DirectionalLight(0xffffff, 0.8);
    front.position.set(0, 0, 1);
    scene.add(front);
    
    const back = new THREE.DirectionalLight(0xffffff, 0.5);
    back.position.set(0, 0, -1);
    scene.add(back);
}

export function createFaceMesh() {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(478 * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    
    const indices = [];
    const tesselation = FaceLandmarker.FACE_LANDMARKS_TESSELATION;
    for (let i = 0; i < tesselation.length; i += 3) {
        const p1 = tesselation[i];
        const p2 = tesselation[i + 1];
        const p3 = tesselation[i + 2];
        if (p1 && p2 && p3) {
            indices.push(p1.start, p2.start, p3.start);
        }
    }
    geometry.setIndex(indices);

    const material = new THREE.MeshPhongMaterial({ 
        color: 0xfed0a0,
        specular: 0xffa080,
        shininess: 100,
        side: THREE.DoubleSide,
        flatShading: true,
        transparent: false,
        opacity: 1,
    });

    mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);
}

export function updateMesh() {
    if (!mesh || !latestLandmarks || latestLandmarks.length === 0 || !video || !video.videoWidth) return;

    const positions = mesh.geometry.attributes.position.array;
    const aspectRatio = video.videoWidth / video.videoHeight;

    for (let i = 0; i < latestLandmarks.length; i++) {
        const landmark = latestLandmarks[i];
        positions[i * 3] = (-(landmark.x - 0.5) * 2 * aspectRatio);
        positions[i * 3 + 1] = -(landmark.y - 0.5) * 2;
        positions[i * 3 + 2] = -landmark.z * 3;
    }
    
    mesh.geometry.attributes.position.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
}

function animate() {
    updateMesh();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function init() {
    container = document.getElementById('face-model-container');
    if (!container) return;

    setupScene();
    setupLighting();
    createFaceMesh();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    renderer.setAnimationLoop(animate);
}

init();