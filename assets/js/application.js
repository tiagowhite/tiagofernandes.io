"use strict";
import 'core-js';
import baffle from 'baffle';
import Parallax from 'parallax-js';

function app() {
  baffleRun();
  parallaxRun();
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

app();
