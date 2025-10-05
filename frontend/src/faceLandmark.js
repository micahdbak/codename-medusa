import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

export let latestLandmarks = [];
export let video;
let faceLandmarker;

function predictionLoop() {
    if (faceLandmarker && video.readyState >= 2) {
        const results = faceLandmarker.detectForVideo(video, performance.now());
        if (results.faceLandmarks && results.faceLandmarks.length > 0) {
            latestLandmarks = results.faceLandmarks[0];
        }
    }
}

function update() {
    predictionLoop();
    requestAnimationFrame(update);
}

async function init() {
    video = document.createElement('video');
    video.autoplay = true;
    video.playsInline = true;

    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
            delegate: "GPU"
        },
        outputFaceBlendshapes: true,
        runningMode: "VIDEO",
        numFaces: 1
    });

    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 }
    });
    video.srcObject = stream;

    await new Promise((resolve) => {
        video.addEventListener('loadeddata', resolve);
    });

    update();
}

init();