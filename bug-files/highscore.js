// Unchanging variables
const userName = $("#score-name");
const submitButton = $("#submit-score"); 
const goBackButton = $(".goback-btn")
const highScoresList = $("#high-score-list");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // Gets saved highscores and if none creates an empty array


// Function that save, sorts and splices scores to localStorage
function SaveHighScore() {
  // Key : value pairs used to store in highScores array
  const score = {
    score: mostRecentScore,
    name: userName.val(),
  };

  // Puts score variable into local storage array
  highScores.push(score);

  // Sorts the scores from highest to lowest
  highScores.sort((a, b) => b.score - a.score); // if b.score is higher than a.score put b.score first

  // Shows only 3 scores from the array
  highScores.splice(3);

  // Updates the highscores array with the new scores after the game ends
  localStorage.setItem("highScores", JSON.stringify(highScores));
  // Places the scores in the .scoreboard-card in index.html
  highScoresList.html(
    // Takes the values from highScores and returns the values as a list
    highScores
      .map((score) => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
      })
      .join("")
  );
}



// Event listener runs SaveHighScore function
submitButton.click(() => {
  $(".highscore-card").addClass("highscore-show");
  SaveHighScore();
});

// Refreshes browser to start fresh game
goBackButton.click(()=>{
    location.reload()
});
