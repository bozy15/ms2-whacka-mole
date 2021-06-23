# Whacka-mole - Testing section

[Main README.md file for whacka-mole](README.md)

## Table of Contents

1. [**Manual Tests**](#manual-testing)
2. [**Client Stories Tests**](#client-stories-tests)
3. [**Automated Tests**](#automated-tests)
4. [**Bugs**](#bugs)
   - [**Solved Bugs**](#solved-bugs)
   - [**Unsolved Bugs**](#unsolved-bugs)

## Manual Tests

### Tests on Laptop

All tests on laptop were repeated in Chrome and Firefox on two different screen sizes.

1. Game info popup

   - Opened the game in a new window to check if popup would launch.
   - Played the game and after time was up I refreshed the window to see if the popup would launch.
   - Closed the window after a game had finished and opened a new one to see if the popup would launch.
   - Checked if the game would start when the start button was pressed.
   - Hovered over the start button to check the CSS added was working.
   - Clicked the start button to check the relevant CSS was applied.

2. Score, Timer and the mute button

   - Checked to see if the score incremented when a mole was hit.
   - Confirmed that moles couldn't be hit multiple time before going back in the hole.
   - Tried clicking on grass around a mole to see if it would score.
   - Confirmed after the game was played again the score was returned to 0.
   - Confirmed the timer begins at 20 seconds and counts down.
   - Checked when the timer reaches 0 the game ends.
   - Checked every time the user reaches a score of a 10 or multiple of 10, ten seconds are added on to the current time.
   - Confirmed the audio would stop playing when the mute button was clicked.
   - Checked the audio would resume playing after clicked the mute button again.
   - Repeated the last to steps multiple times to make sure the button would always mute and unmute.

3. Gameplay

   - Game was let run with no interaction to see if it would end when the timer reaches zero.
   - Checked to see if the game would end after adding on multiple bonus time.
   - Checked that when moles are clicked on the image changes to reflect that they have been hit.
   - Confirmed that the audio was played when moles where whacked.
   - Confirmed that the background audio was played as soon as game started.
   - Checked to see if the different levels of difficulty would run when score 5 and 10 were reached.
   - Confirmed that the images and the speed of playback for the audio would change to reflect the change in difficulty.
   - Confirmed that when the game ended on all 3 difficulties the end game card would appear and when the play again button was clicked the game would play from the easiest difficultly with the correct images used for the moles.

   4. End Game card

   - Checked that the end game card displayed after game has ended multiple playthroughs.
   - After each playthrough the play again button was clicked to check if the game would start again with the score set to 0, the timer set to 20 seconds and that the correct game difficulty would play.
   - Confirmed that the Audio would play at original speed after play again was clicked.

### Tests on Mobiles and tablets

All tests were performed on this developers Xiaomi mi 10 mobile device and iPad. All tests done on Laptop were performed on the mobile devices. Below are the specific tests for mobile devices.

1. Game info popup

- Checked to see if the popup remained in the screen width on the devices with smaller screens.
- Confirmed that the start button was positioned below the info text and worked when user tapped the button.
- Confirmed the text and button sizes were all comfortably readable.

2. Score, Timer and the mute button

- Confirmed the Score and timer were aligned nicely while playing the came and didn't interfere with any moles popping up.

- Checked the mute button still worked when tapped and the icon changed.

- Confirmed the mute button was resized well and didn't interfere with gameplay.

3. Gameplay

- All moles could be seen on screen and were aligned nicely.

- That when a mole was tapped that there was no overlapping of "touch zones" and the correct mole would be hit.

- Checked to make sure the mole and hole sizes were resized and fit well with the gameplay.

4. End Game card

- Confirmed the popup fit nicely on all displays.

- Checked that the **Play Again** button was displayed below the text and was working when tapped.

## Client Stories Tests

#### As a user, I want:

1. To have instructions on how to play the game and what the rules may be.

   - When the user firsts visits the site they are greeted with a popup card that gives a how to play.
   - Once the user reads all the text they will see a **start button** at the bottom of the popup that will started the game once clicked.

2. The ability to mute any sounds that would be playing in the background.

   - While in game there is a mute button displayed on the top right below the timer.
   - The icon used while the audio plays is the displayed as the mute action that will be taken if clicked.
   - Once clicked the icon changes to a similar icon but displays volume which will play the audio again.

3. To be able to see my current score.

   - On the top-left there is a score board that dynamically changes every time the user whacks a mole.

4. Increase the level of difficulty as the I progress through the game.

   - After a score of 5 points is reached, the speed of which the moles pop up and down increases creating a slight challenge.
   - Once a score of 10 is reached the speed increases once again creating a much more difficult challenge for the user and they can only miss a few moles otherwise they wont make enough points to extend the time.

5. A visually appealing game.

   - This project uses a vibrant background and sprites which gives a colorful cartoon theme.
   - [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P#standard-styles) Font was used to tie in with the old-school game whack-a-mole and pay homage to 8 and 16 bit games.
   - A number of mole sprites were used in this project, changing when the difficulty changes and when a mole is hit.
   - Background music with a cartoonish feel is played on loop and increases in speed to match the different levels of difficulty.

6. The ability to play this game on multiple devices.

   - The game was designed to be played on PC but two media queries were created to enable this game to be played on both tablet and mobile devices.

## Automated Tests

These were the validation services use to check the projects code.

- [W3C Markup Validation](https://validator.w3.org/) was used to check the HTML.
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) was used to check the CSS.
- [JSHint](https://jshint.com/) was used to check the JavaScript

## Bugs

#### Solved Bugs

1. After Writing two functions to test if the moles would come out of the holes nothing was happening.

- At first I assumed I misspelled a variable or function but everything seemed okay. I tried to clear the cache of the webpage but still nothing happened.
  - Fix: A quick look in the console I seen that it said the jQuery function .addClass wasn't a function. Perhaps I had the jQuery script in the body rather than the head but I simply used JavaScript function classList.add() to add the CSS to the correct element.
    <img src="assets\images\bug-fix2.png" alt="Screenshot of Firefox console show error in code" width="300"/>

2. The last bug fix created another issue in my code as the moles would come up from their selected holes nicely but the wouldn't go down.

- I had a look quick glance at my code and everything seemed to make sense. I had a look at the console on Firefox and it wasn't throwing any errors so I was unsure where the issue was.
  - Fix: Although I was confident in my code I know "the computer never lies" so there must of been an error in my function goDown() and when I looked closely I had written holeUp.classList.**add**() when it should of been holeUp.classList.**remove**()
    <img src="assets\images\bug-fix3.png" alt="Screenshot of Firefox console show error in code" width="300"/>

3. A startGame function was written to run the game when the start button was clicked. After a setInterval() function was assigned to a variable to control the countdown timer. When I ran the game the moles would pop up and down indefinitely and the game wouldn't end.

- Since the game ran I knew the issue was with either the startGame() or the setInterval function. Looking at the code nothing looked out of place, spelling was correct and the right variables were called. I looked at the console on FireFox and an error appeared stating that the timer variable was undefined.
  - Fix: Confused as to how the variable was undefined since I had it defined on the top of my main.js. I'm still not fully sure why but my best assumption is that because I used **let** timer it was in block scope and wasn't defined within the curly braces of my function. So I used $() to call it and that resolved my issue.

4. When Running the game I tried to whack a mole to test if I could increment the score and see if the mole sprite would change to indicate it had been clicked on but the neither of those things happened.

- At first I assumed there was an error in my whackaMole() but everything seemed to be correct inside. Next, I thought it was my Event listener but that was correct. I ran the game again and opened the browser console and tried clicking on a few moles to see if it would throw up some errors and still nothing came up.
  - Fix: Since no errors were throw in the console I felt confidant that my JS was functioning well and it was either my index.html or style.css. I remembered that I had set the hole's image z-index to -1 which put it behind the html document and so couldn't be clicked on. I removed the z-index which put the mole sprite above the hole image but I find that it isn't very noticeable.

5. When a mole is whacked I noticed that if you clicked a number of times it would increment the score after each click. I wanted to have one score per hit to maintain the challenge.

- I used a jQuery selector to add the CSS "pointer-events: none;" to the .hole.up .mole element. This sort of worked as it would prevent multiple clicks but unfortunately it prevented the mole being clicked on if it came up in the same hole again.
  - Fix: I created a setTimeOut() and added $(this).CSS("pointer-events", "auto") to reset the CSS after 600ms.

6. I wanted to add the ability to extend gameplay by reaching a score of and any multiple of 10.

- I put an if statement in my WhackaMole(e) function that asked if (score % 10 === 0) { countdown += 10 }.
  <img src="assets\images\bug-fix5.png" alt="Screenshot of if statement" width="300"/>
  When I ran the game and reached a score of 10 the timer had an extra 10 seconds added on but my issue was that even though an extra 10 seconds were added on the original countdown would still be running and would end the comeUp() function. - Fix: I soon realized the reason the countdown timer wasn't being updated is that I had incremented the extra 10s to far down in the scope that the startGame() had already run so I replaced the setTimeOut() I had in the startGame() with a function that had an if statement that would check to see the countdown timer had reached a value less than 1 and if not it would run the function again every 1000ms until the statement was true and then it return the value of timeUp as true which would end the game.
  <img src="assets\images\bug-fix4.png" alt="Screenshot of function that solved the issue in code" width="300"/>

#### Unsolved Bugs

No noticed unresolved bugs during testing on all devices.
