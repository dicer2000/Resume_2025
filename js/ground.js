import * as THREE from 'three';

/**
 * Initializes and adds a circular ground plane with a radial alpha gradient.
 * @param {THREE.Scene} scene - The THREE.Scene to which the ground is added.
 */
export function initGround(scene) {
  // 1) Create the circle geometry
  const geometry = new THREE.CircleGeometry(20, 64);

  // 2) Load your radial alpha map
  const textureLoader = new THREE.TextureLoader();
  const alphaMap = textureLoader.load('./js/rg.png'); 
  // Make sure 'textures/radialGradient.png' is in your project

  // 3) Create a material with alphaMap
  const material = new THREE.MeshPhongMaterial({
    color: 0x000005,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.0,      // We'll rely primarily on alphaMap for the fade
    alphaMap: alphaMap
  });

  // 4) Create and position the mesh
  const groundCircle = new THREE.Mesh(geometry, material);
  groundCircle.rotation.x = -Math.PI / 2;  // Lay it flat
  groundCircle.position.y = -20;          // Below main scene elements
  scene.add(groundCircle);

  return groundCircle;
}
