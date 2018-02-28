const baffle = require("baffle");

let hello = baffle('.hello', {
  characters: '"█▓▒░█▓▒░█▓▒░<>/"',
  speed: 75
}).reveal(1000);
