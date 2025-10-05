import { DrawingUtils, FaceLandmarker } from '@mediapipe/tasks-vision';
import { latestLandmarks, video } from './faceLandmark.js';

let canvasElement;
let canvasCtx;
let drawingUtils;

function updateCanvasSize() {
    if (video.videoWidth && canvasElement) {
        canvasElement.width = video.videoWidth;
        canvasElement.height = video.videoHeight;
    }
}

export function initFaceMeshRenderer(canvas) {
    if (!canvas) {
        console.error("Canvas element not provided for face mesh renderer.");
        return;
    }
    canvasElement = canvas;
    canvasCtx = canvasElement.getContext('2d');
    drawingUtils = new DrawingUtils(canvasCtx);

    video.addEventListener('loadedmetadata', updateCanvasSize);
    updateCanvasSize();
}

export function renderFaceMesh() {
    if (!canvasCtx || !drawingUtils) return;
    
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    
    if (latestLandmarks && latestLandmarks.length > 0) {
        drawingUtils.drawConnectors(
            latestLandmarks,
            FaceLandmarker.FACE_LANDMARKS_TESSELATION,
            { color: '#C0C0C070', lineWidth: 1 }
        );
    }
}