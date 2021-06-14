// Temporary function to hide .game-card-info while building the game
$(".game-card-show").click(() => {
  $(".game-card-show").addClass("game-card-hide");
  console.log("It disappeared");
});

const holes = $(".hole");
const scoreBoard = $(".current-score");
const moles = $(".mole");
const timer = $(".timer")