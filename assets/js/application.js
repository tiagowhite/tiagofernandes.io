
const baffle = require("baffle");

var hello = baffle('.hello', {
  characters: '"█▓▒░█▓▒░█▓▒░<>/"',
  speed: 75
}).reveal(1000);
