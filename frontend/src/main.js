import * as THREE from 'three';
import fragShader from './shader.frag?raw';

// 10x10 map
const map = [
  1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,1,
  1,0,0,1,0,0,1,0,0,1,
  1,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1
];

const mapW = 10;
const mapH = 10;

const data = new Uint8Array(4 * mapW * mapH);
const size = mapW * mapH;

const color = new THREE.Color(0xffffff);
const r = Math.floor(color.r * 255);
const g = Math.floor(color.g * 255);
const b = Math.floor(color.b * 255);

for (let i = 0; i < size; i++) {
	const stride = i * 4;
	
  if (map[i] == 1) {
    data[stride] = r;
    data[stride + 1] = g;
    data[stride + 2] = b;
  } else {
    data[stride] = 0;
    data[stride + 1] = 0;
    data[stride + 2] = 0;
  }
	data[stride + 3] = 255;
}

const mapTexture = new THREE.DataTexture(data, mapW, mapH);
mapTexture.needsUpdate = true;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.Camera();
camera.position.z = 1;

const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.ShaderMaterial({
  uniforms: {
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uCamPos: { value: new THREE.Vector2(5.0, 5.0) },
    uCamDir: { value: new THREE.Vector2(-0.5, -1.0) },
    uMap: { value: mapTexture },
    uMapSize: { value: new THREE.Vector2(mapW, mapH) }
  },
  fragmentShader: fragShader
});

const quad = new THREE.Mesh(geometry, material);
scene.add(quad);

var rads = 0;

// Animate
function animate() {
  material.uniforms.uResolution.value.set(
    window.innerWidth,
    window.innerHeight
  );
  // material.uniforms.uCamPos.value.set(
  //   5.0 - Math.cos(rads),
  //   5.0 + Math.sin(rads)
  // );
  material.uniforms.uCamDir.value.set(
    Math.cos(rads),
    -Math.sin(rads)
  );
  rads += 0.01;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);