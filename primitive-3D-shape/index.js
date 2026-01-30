import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';

//————— Renderer —————
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

//————— Camera —————
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

//————— Scene —————
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1c1c1e');

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.02;

const radius = 3.5;
const tubeRadius = 1.5;
const radialSegments = 60;
const tubularSegments = 100;
const p = 2;
const q = 3;
const geo = new THREE.TorusKnotGeometry(
  radius, tubeRadius, tubularSegments, radialSegments, p, q);

const mat = new THREE.MeshStandardMaterial({
  color: '#f72d6d',
  roughness: 0.25,
  metalness: 0.95,
});
const mesh = new THREE.Mesh(geo, mat);
mesh.scale.setScalar(0.11);

const pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(mesh);

// const wireMat = new THREE.MeshBasicMaterial({
//   color: '#d23939',
//   wireframe: false,
// });

// const wireMesh = new THREE.Mesh(geo, wireMat);
//wireMesh.scale.setScalar(1.001);
// mesh.add(wireMesh);

//————— Light —————
const sunLight = new THREE.DirectionalLight('#ffffff', 2);
sunLight.position.set(0, -3, 0);
scene.add(sunLight);

const hemiLight = new THREE.HemisphereLight('pink', 'blue', 1);
scene.add(hemiLight);

gsap.from(mesh.scale, {
  x: 0,
  y: 0,
  z: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)"
});

gsap.to(mesh.rotation, {
  y: Math.PI * 2,
  x: Math.PI * 2,
  duration: 10,
  repeat: -1,
  ease: "none"
});

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

window.addEventListener('click', (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObject(mesh);

  if (intersects.length > 0) {
    const newColor = new THREE.Color(`hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${30 + Math.random() * 60}%)`);

    gsap.to(mesh.material.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(mesh.scale, {
      x: 0.15, y: 0.15, z: 0.15,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
      onComplete: () => mesh.scale.setScalar(0.11)
    });
  }
});

function animate(t = 0) {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

animate();