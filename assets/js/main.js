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

  // Function to run the game when the start button is clicked
  function startGame() {
    countdown = startTime / 1000; // Assigns 30s to countdown
    $(timer).append(countdown); // Puts the time in the HTML
    score = 0;
    $(currentScore).append(score); // Adds the starting score to HTML
    timeUp = false;
    comeUp(); // Calls function to make moles pop up and down
    setTimeout(() => {
      // Sets timeUp as true after 30 seconds which will end the game
      timeUp = true;
    }, startTime);

    let startTimer = setInterval(() => {
      // decrement the timer
      countdown -= 1;
      $(timer).text(`Time Left: ${countdown}`);
      if (countdown < 1) {
        countdown = 0;
        clearInterval(startTimer); // Clears the setInterval() after timer reaches 0
        $(timer).html("Nice Job!");
      }
    }, 1000);
  }

  // Increment score when mole is clicked
  function whackaMole(e) {
    score++; // Increments score by 1 when mole is clicked
    $(this).css("background-image", "url(assets/images/mole-hit.png)"); // Changes image to indicate mole was hit
    $(this).css("pointer-events", "none"); // Prevents clicking the same mole twice to score extra points
    setTimeout(() => {
      $(this).css("background-image", "url(assets/images/mole.png)");
    }, 800); // Changes image back to mole after 800ms
    setTimeout( () => {
        $(this).css("pointer-events", "auto"); // Resets pointer events after 600ms
    }, 600);
    $(currentScore).html(score); // Appends the score to the .current-score div
  }

  // Event listeners
  $(startButton).on("click", startGame); // Starts game after start button is pressed
  $(moles).on("click", whackaMole);
}); // End of DOM ready function

