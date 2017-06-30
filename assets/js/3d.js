const THREE = require('three/build/three.min');

const aspect = window.innerWidth / window.innerHeight;
const d = 20;
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);

camera.position.set(20, 20, 20); // all components equal
camera.lookAt(scene.position); // or the origin

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  render.render(scene, camera);
}
animate();
