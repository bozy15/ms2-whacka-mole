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

1. The mole sprite was overlaying on top of the hole image and so when the mole was sliding down it was going over the hole instead of behind it.

- Even though I had the z-index set so the hole image would be on top of the mole sprite and the correct position set on both parent and child elements it would still overlay.
  - Fix: I had accidentally set the z-index to the .mole to -1 and that seemed to put the mole behind the hole.
    <img src="assets\images\bug-fix1.png" alt="Screenshot of .mole css" width="200"/>

2. After Writing two functions to test if the moles would come out of the holes nothing was happening.

- At first I assumed I misspelled a variable or function but everything seemed okay. I tried to clear the cache of the webpage but still nothing happened.
  - Fix: A quick look in the console I seen that it said the jQuery function .addClass wasn't a function. Perhaps I had the jQuery script in the body rather than the head but I simply used JavaScript function classList.add() to add the CSS to the correct element.
    <img src="assets\images\bug-fix2.png" alt="Screenshot of Firefox console show error in code" width="120"/>

3. The last bug fix created another issue in my code as the moles would come up from their selected holes nicely but the wouldn't go down.

- I had a look quick glance at my code and everything seemed to make sense. I had a look at the console on Firefox and it wasn't throwing any errors so I was unsure where the issue was.
  - Fix: Although I was confident in my code I know "the computer never lies" so there must of been an error in my function goDown() and when I looked closely I had written holeUp.classList.**add**() when it should of been holeUp.classList.**remove**()
  <img src="assets\images\bug-fix3.png" alt="Screenshot of Firefox console show error in code" width="120"/>

#### UnSolved Bugs
