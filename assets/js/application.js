"use strict";
import 'core-js';
import baffle from 'baffle';
import Parallax from 'parallax-js';
import * as THREE from 'three';

function app() {
  baffleRun();
  /*parallaxRun();*/
  runThree();
}

function parallaxRun() {
  const i = new Parallax(scene, {
    calibrateX: !0,
    calibrateY: !0,
    invertX: !0,
    invertY: !0,
    scalarX: 100,
    scalarY: 100,
    pointerEvents: !0
  });
  i.desktop ? i.invert(!0, !0) : i.invert(!1, !1)
}


function baffleRun() {
  const hello = baffle('.hello', {
    characters: '"█▓▒░█▓▒░█▓▒░<>/"',
    speed: 75
  }).reveal(1000);
}

function runThree() {
  const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
  /*renderer.setClearColor(0x1f0d23);*/
  renderer.setClearColor(0xffffff);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
  const scene = new THREE.Scene();
  const light = new THREE.AmbientLight(0xffffff, 0.5);

  scene.add(light);

  const geometry = new THREE.PlaneGeometry(200, 129, 0);
  const texture = new THREE.TextureLoader().load('../img/logo0a.png');
  const material = new THREE.MeshBasicMaterial({map: texture});
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  requestAnimationFrame(render);

  function render() {

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
}

app();
