import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; // Ensure this path matches your import map

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of View
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Near Clipping Plane
  1000 // Far Clipping Plane
);
camera.position.set(0, 0, 50); // Positioned further back for better visibility

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing for smoother lines
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; // Enable inertia
// controls.dampingFactor = 0.05;

// Helpers
// const axesHelper = new THREE.AxesHelper(25);
// scene.add(axesHelper);

// const gridHelper = new THREE.GridHelper(50, 50);
// scene.add(gridHelper);

// Function to create a five-pointed star
function createStar(points = 5, outerRadius = 20, innerRadius = 10, color = 0xff0000) {
  const starPoints = [];
  const angleStep = (Math.PI * 2) / points;

  for (let i = 0; i < points * 2; i++) {
    const angle = i * (Math.PI / points); // Alternate between outer and inner points
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    starPoints.push(new THREE.Vector3(x, y, 0));
  }

  // Close the star by adding the first point at the end
  starPoints.push(starPoints[0]);

  const geometry = new THREE.BufferGeometry().setFromPoints(starPoints);
  const material = new THREE.LineBasicMaterial({ color: color, linewidth: 200 });
  const starLine = new THREE.Line(geometry, material);

  return starLine;
}

// Create and add the star to the scene
const star = createStar(5, 20, 10, 0xff00ff); // Five-pointed blue star
scene.add(star);

// Responsive Design: Handle Window Resizing
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // rotation for dynamic visualization
//  star.rotation.z += 0.005;

//  controls.update(); // Update controls for damping
  renderer.render(scene, camera);
}

animate();
