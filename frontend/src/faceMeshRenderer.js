import { DrawingUtils, FaceLandmarker } from '@mediapipe/tasks-vision';
import { latestLandmarks, video } from './faceLandmark.js';

let canvas;
let canvasCtx;
let drawingUtils;

function updateCanvasSize() {
    if (video.videoWidth) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    }
}

function renderMesh() {
    if (!canvasCtx) return;
    
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    if (latestLandmarks && latestLandmarks.length > 0) {
        drawingUtils.drawConnectors(
            latestLandmarks,
            FaceLandmarker.FACE_LANDMARKS_TESSELATION,
            { color: '#C0C0C070', lineWidth: 1 }
        );
    }
}

function update() {
    renderMesh();
    requestAnimationFrame(update);
}

function init() {
    canvas = document.getElementById('canvas');
    if (!canvas) return;
    
    canvasCtx = canvas.getContext('2d');
    drawingUtils = new DrawingUtils(canvasCtx);

    video.addEventListener('loadedmetadata', updateCanvasSize);
    update();
}

init();