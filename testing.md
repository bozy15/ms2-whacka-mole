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

#### UnSolved Bugs