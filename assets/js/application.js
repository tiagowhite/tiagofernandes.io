"use strict";

import 'core-js';
import anime from 'animejs'
import baffle from 'baffle'

function app() {
	let hello = baffle('.hello', {
		characters: '"█▓▒░█▓▒░█▓▒░<>/"',
		speed: 75
	}).reveal(1000);

}
app();
