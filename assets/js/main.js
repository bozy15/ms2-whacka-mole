// Runs game once DOM is fully loaded
$(document).ready(function () {

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
  let sameHole;
  let timeUp = false;
  let startTime = 30000;
  let score = 0;
  let countdown;

  // Chooses which hole the mole will appear from
  function findHole(holes) {
    const randomHole = Math.floor(Math.random() * holes.length); // Picks a random hole between 0 - 8
    const hole = holes[randomHole]; // assigns chosen hole
    if (hole === sameHole) {
      return findHole(holes); // If the same hole is selected twice in a row the function will run again
    }
    sameHole = hole; // Assigns selected hole to check in the if statement
    return hole;
  }
  // Tells the moles to pop up for selected amount of time
  function comeUp() {
    const time = Math.random() * 2000 + 500; // Chooses random time between 500ms and 2s
    const holeUp = findHole(holes); // Selects hole chosen by findHole()
    holeUp.classList.add("up"); // Adds CSS to the selected hole to make the mole appear

    // Function makes moles do down if they haven't been hit
    setTimeout(() => {
      holeUp.classList.remove("up");
      if (!timeUp) comeUp(); // If timeUp is false run comeUp() again
    }, time); // Amount of time we wait before goDown() is called
  }

  function startGame() {
    countdown = startTime / 1000; // Assigns 30s to countdown
    $(timer).append(countdown); // Puts the time in the HTML
    score = 0;
    $(currentScore).append(score);
    timeUp = false;
    comeUp();
    setTimeout ( () => {
      timeUp = true;
    }, 30000); 
 
  let startCountdown = setInterval(() => {
      countdown -= 1;
      $(timer).html(countdown);
      if (countdown < 1) {
        countdown = 0;
        clearInterval(startCountdown);
        timer.textContent = "Nice Job!"
      } 
    }, 1000);
    }
    $(startButton).on("click", startGame);
});
