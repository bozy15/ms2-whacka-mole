// Runs game once DOM is fully loaded
$(document).ready(function() {

// Temporary function to hide .game-card-info while building the game
$(".game-card-show").click(() => {
  $(".game-card-show").addClass("game-card-hide");
  console.log("It disappeared");
});
// unchanging variables
const holes = $(".hole");
const moles = $(".mole");
const timer = $(".timer");
const currentScore = $(".current-score");
const startButton = $(".start-button");

// Dynamically changing variables
let lastPopUp;
let timeUp = false;
let startTime = 30000;
let score = 0;
let countdown;

});