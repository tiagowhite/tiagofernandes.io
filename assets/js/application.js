const baffle = require("baffle");
require('./BackgroundImage');

var hello = baffle('.hello', {
  characters: '"█▓▒░█▓▒░█▓▒░<>/"',
  speed: 75
}).reveal(1000);
