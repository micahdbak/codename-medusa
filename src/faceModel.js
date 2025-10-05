import * as THREE from 'three';
import { FaceLandmarker } from '@mediapipe/tasks-vision';
import { latestLandmarks, video } from './faceLandmark.js';

export let mesh;
export let leftEye, rightEye, leftPupil, rightPupil, tongue;

const leftEyeConnections = FaceLandmarker.FACE_LANDMARKS_LEFT_EYE;
const LEFT_EYE_INDICES = [...new Set(leftEyeConnections.flatMap(conn => [conn.start, conn.end]))];
const rightEyeConnections = FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE;
const RIGHT_EYE_INDICES = [...new Set(rightEyeConnections.flatMap(conn => [conn.start, conn.end]))];
const TONGUE_INDICES = [13, 14, 78, 191, 80, 81, 82, 312, 311, 310, 415, 308];

export function createEyes() {
    const eyeGeometry = new THREE.SphereGeometry(0.07, 16, 16);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    
    leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);

    const pupilGeometry = new THREE.SphereGeometry(0.058, 16, 16);
    const pupilMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });

    leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
}

export function createTongue() {
    const tongueGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const tongueMaterial = new THREE.MeshPhongMaterial({ color: 0xaa4a44 });
    tongue = new THREE.Mesh(tongueGeometry, tongueMaterial);
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
        flatShading: false,
        transparent: false,
        opacity: 1,
    });

    mesh = new THREE.Mesh(geometry, material);
}

export function updateMesh() {
    if (!mesh || !latestLandmarks || latestLandmarks.length === 0 || !video || !video.videoWidth) return;

    const positions = mesh.geometry.attributes.position.array;
    const aspectRatio = video.videoWidth / video.videoHeight;

    const leftEyeCenter = new THREE.Vector3();
    const rightEyeCenter = new THREE.Vector3();
    const tongueCenter = new THREE.Vector3();
    let leftEyeCount = 0;
    let rightEyeCount = 0;
    let tongueCount = 0;

    for (let i = 0; i < latestLandmarks.length; i++) {
        const landmark = latestLandmarks[i];
        const x = (-(landmark.x - 0.5) * 2 * aspectRatio);
        const y = -(landmark.y - 0.5) * 2;
        const z = -landmark.z * 3;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        if (LEFT_EYE_INDICES.includes(i)) {
            leftEyeCenter.add(new THREE.Vector3(x, y, z));
            leftEyeCount++;
        }
        if (RIGHT_EYE_INDICES.includes(i)) {
            rightEyeCenter.add(new THREE.Vector3(x, y, z));
            rightEyeCount++;
        }
        if (TONGUE_INDICES.includes(i)) {
            tongueCenter.add(new THREE.Vector3(x, y, z));
            tongueCount++;
        }
    }
    
    mesh.geometry.attributes.position.needsUpdate = true;
    mesh.geometry.computeVertexNormals();

    if (leftEyeCount > 0) {
        leftEyeCenter.divideScalar(leftEyeCount);
        leftEye.position.copy(leftEyeCenter);
        leftPupil.position.copy(leftEyeCenter).setZ(leftEyeCenter.z + 0.02); // Position pupil slightly in front
    }

    if (rightEyeCount > 0) {
        rightEyeCenter.divideScalar(rightEyeCount);
        rightEye.position.copy(rightEyeCenter);
        rightPupil.position.copy(rightEyeCenter).setZ(rightEyeCenter.z + 0.02); // Position pupil slightly in front
    }

    if (tongueCount > 0) {
        tongueCenter.divideScalar(tongueCount);
        tongue.position.copy(tongueCenter);
        tongue.scale.set(1, 0.5, 0.8);
    }
}