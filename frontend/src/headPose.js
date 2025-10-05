import { latestLandmarks } from './faceLandmark.js';

export const smoothedHeadPose = { x: 0, y: 0, z: 0 };
const rawHeadPose = { x: 0, y: 0, z: 0 };
let initialEyeDistance = -1;
let poseContainer;

function calculateHeadPose() {
    if (!latestLandmarks || latestLandmarks.length === 0) return;

    const rightEyeOuter = latestLandmarks[33];
    const leftEyeOuter = latestLandmarks[263];
    const noseBridge = latestLandmarks[168];  

    if (!rightEyeOuter || !leftEyeOuter || !noseBridge) return;

    const eyeMidpointX = (rightEyeOuter.x + leftEyeOuter.x) / 2;
    const eyeMidpointY = (rightEyeOuter.y + leftEyeOuter.y) / 2;
    const dx = leftEyeOuter.x - rightEyeOuter.x;
    const dy = leftEyeOuter.y - rightEyeOuter.y;
    const currentEyeDistance = Math.sqrt(dx * dx + dy * dy);

    rawHeadPose.x = (eyeMidpointX * 2) - 1;
    rawHeadPose.y = -(eyeMidpointY * 2 - 1);

    if (initialEyeDistance < 0 && currentEyeDistance > 0) {
        initialEyeDistance = currentEyeDistance;
    }

    if (initialEyeDistance > 0) {
        rawHeadPose.z = (currentEyeDistance / initialEyeDistance) - 1;
    }
}

function smoothPose() {
    const lerpFactor = 0.1;
    smoothedHeadPose.x += (rawHeadPose.x - smoothedHeadPose.x) * lerpFactor;
    smoothedHeadPose.y += (rawHeadPose.y - smoothedHeadPose.y) * lerpFactor;
    smoothedHeadPose.z += (rawHeadPose.z - smoothedHeadPose.z) * lerpFactor;
}

function displayPose() {
    if (!poseContainer) return;
    
    poseContainer.innerHTML = `
        Head Pose:<br>
        x: ${smoothedHeadPose.x.toFixed(3)}<br>
        y: ${smoothedHeadPose.y.toFixed(3)}<br>
        z: ${smoothedHeadPose.z.toFixed(3)}
    `;
}

// Animation loop
function update() {
    calculateHeadPose();
    smoothPose();
    displayPose();
    requestAnimationFrame(update);
}

// Initialization
function init() {
    poseContainer = document.getElementById('head-pose-container');
    if (!poseContainer) return;
    update();
}

init();