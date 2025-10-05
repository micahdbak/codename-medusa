import { FaceLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';

let faceLandmarker;
let video;
let canvasElement;
let canvasCtx;
let drawingUtils;
let poseDataContainer;

export const smoothedHeadPose = { x: 0, y: 0, z: 0 };

const rawHeadPose = { x: 0, y: 0, z: 0 };
const eyeMidpointPixels = { x: 0, y: 0 };
let initialEyeDistance = -1;

async function initializeMediaPipe() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );
  
  faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
      delegate: "GPU"
    },
    runningMode: "VIDEO",
    numFaces: 1
  });
}

async function initializeWebcam() {
  const stream = await navigator.mediaDevices.getUserMedia({ 
    video: { width: 1280, height: 720 } 
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.addEventListener('loadeddata', () => {
      canvasElement.width = video.videoWidth;
      canvasElement.height = video.videoHeight;
      resolve();
    });
  });
}

function calculateHeadPose(landmarks) {
  const rightEyeOuter = landmarks[33];
  const leftEyeOuter = landmarks[263];

  if (!rightEyeOuter || !leftEyeOuter) return;

  const eyeMidpointX = (rightEyeOuter.x + leftEyeOuter.x) / 2;
  const eyeMidpointY = (rightEyeOuter.y + leftEyeOuter.y) / 2;
  
  eyeMidpointPixels.x = eyeMidpointX * canvasElement.width;
  eyeMidpointPixels.y = eyeMidpointY * canvasElement.height;

  rawHeadPose.x = (eyeMidpointX * 2) - 1;
  rawHeadPose.y = -((eyeMidpointY * 2) - 1);

  const dx = leftEyeOuter.x - rightEyeOuter.x;
  const dy = leftEyeOuter.y - rightEyeOuter.y;
  const currentEyeDistance = Math.sqrt(dx * dx + dy * dy);

  if (initialEyeDistance < 0) {
    initialEyeDistance = currentEyeDistance;
  }
  
  rawHeadPose.z = (currentEyeDistance / initialEyeDistance) - 1;
}

function smoothHeadPose() {
  const lerpFactor = 0.1;
  smoothedHeadPose.x += (rawHeadPose.x - smoothedHeadPose.x) * lerpFactor;
  smoothedHeadPose.y += (rawHeadPose.y - smoothedHeadPose.y) * lerpFactor;
  smoothedHeadPose.z += (rawHeadPose.z - smoothedHeadPose.z) * lerpFactor;
}

function updatePoseDisplay() {
  poseDataContainer.innerHTML = `
    X: ${smoothedHeadPose.x.toFixed(3)}<br>
    Y: ${smoothedHeadPose.y.toFixed(3)}<br>
    Z: ${smoothedHeadPose.z.toFixed(3)}
  `;
}

function drawHeadPoseMarker() {
  canvasCtx.fillStyle = 'red';
  canvasCtx.beginPath();
  canvasCtx.arc(eyeMidpointPixels.x, eyeMidpointPixels.y, 5, 0, 2 * Math.PI);
  canvasCtx.fill();
}

function drawFaceLandmarks(landmarks) {
  drawingUtils.drawConnectors(
    landmarks, 
    FaceLandmarker.FACE_LANDMARKS_TESSELATION, 
    { color: '#C0C0C070', lineWidth: 1 }
  );
}

function predictionLoop() {
  const results = faceLandmarker.detectForVideo(video, performance.now());

  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

  if (results.faceLandmarks && results.faceLandmarks.length > 0) {
    const landmarks = results.faceLandmarks[0];
    
    calculateHeadPose(landmarks);
    drawFaceLandmarks(landmarks);
    drawHeadPoseMarker();
  }

  smoothHeadPose();
  updatePoseDisplay();

  requestAnimationFrame(predictionLoop);
}

async function init() {
  video = document.getElementById('video');
  canvasElement = document.getElementById('canvas');
  canvasCtx = canvasElement.getContext('2d');
  poseDataContainer = document.getElementById('pose-data-container');

  await initializeMediaPipe();
  drawingUtils = new DrawingUtils(canvasCtx);
  
  await initializeWebcam();
  predictionLoop();
}

init();