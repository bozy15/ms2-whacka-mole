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

## Client Stories Tests

## Automated Tests

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

#### UnSolved Bugs
