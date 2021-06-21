## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**User Goals**](#user-goals)
    - [**Developers goals**](#developer-goals)
    - [**User Stories**](#user-stories)
    - [**Design**](#design)
    - [**Wireframes**](#wireframes)

2. [**Technologies Used**](#technologies-used)

3. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features to Implement**](#Features-to-Implement)

4. [**Testing**](#testing)

5. [**Deployment**](#deployment)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
        - [**Educational Credit**](#educational-credit)
    - [**Acknowledgements**](#acknowledgements)

## UX 

#### Project Goals

The main goal of Whacka-mole is to give the user a fun, intuitive and addictive game with a growing level of difficulty as the game progresses.

#### User Goals

The players goals:
- An entertaining game that can help pass time.
- Nice images and sounds responsive to actions made by the user.
- Becomes more challenging the further the user gets in the game.
- Easily understood and intuitive to play.

#### Developer Goals

- Build a small game that I would enjoy playing to past the time and also challenge myself.
- Write clean code using JavaScript and jQuery to allow the game to function without issues and also allow others to see how the code works with inline comments on block of code.
- Create a new project to add to my portfolio to showcase my ability.

#### User Stories

As the user of this application I want:
1. To have instructions on how to play the game and what the rules may be.
2. The ability to mute any sounds that would be playing in the background.
3. To be able to see my current and high score.
4. increase the level of difficulty as the I progress through the game.
5. A visually appealing game.
6. The ability to play this game on multiple devices.

### Design

**Colors**

- The theme of this game revolves heavily around moles and my aim was to achieve an earthy look and feel with the color scheme.

**Styling**

- Font used in this Project is [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P#standard-styles) This font was used to give the game a retro feel but contrasts nicely with the background image and sprites.

 - Main color pallet used Throughout the game - <img src="assets/images/palette.png" alt="color-palette" width="300"/>

 - Text Shadow was applied to both the .countdown-timer and .score containers to give the appearance that they are lifted from the image and floating above in the air. 

**Background**

- The background image/colors used were to help make the game feel like it is played on the ground with the moles digging underneath the soil and popping up before being bonked on the head.

**Sprites**

- The game uses 4 mole Sprites. The first sprite is an innocent looking mole that appears from within the hole. The second sprite is used for when the user hits the mole to the give effect the mole has be bonked. The third sprite is used when the user gets to a certain score and the gameplay increases in speed and the mole image is changed to make them look mad. The last mole is used for the final difficulty which increases the speed again after a certain score is reached and the new mole image makes them look very angry to give the use the sense that whacking the moles is actually bothering them.

- A sprite of a mole hole was edited with [pixlr](https://pixlr.com/x/) and was used to overlay the mole sprite to assist in the appearance of the mole descending underground.

**Audio files**

- Audio plays in the background on a loop until the game ends as without the audio the game feels very one dimensional, the audio adds some sub-conscious entertainment and keeps the player more immersed.
    > *"Nacke,  Grimshaw  and  Lindley asked  participants to play a fast-paced, immersive first-person shooter (FPS) game  modification,  in  which  sound  (on/off )  and  music  (on/off )  were  manipulated. Result showed that more positive or neutral dimensions of  the  experience  were  experienced  more  positively  when  the  sound  of  the  game  was  playing."* 
    - The full research paper is linked here [Journal of Psychology & Psychotherapy](https://www.longdom.org/open-access/the-influence-of-background-music-of-video-games-on-immersion-2161-0487-1000191.pdf)

- A snippet of audio that plays when the user hits a mole before they re-enter the hole to add a feeling of success and allow the user to acknowledge that they hit a mole correctly.

###

The wireframes were created using [Balsamiq](https://balsamiq.com/) during the design process of this project.

## Features

### Existing Features

### Features to Implement

## Technologies Used

- This project used HTML5, CSS3 and JavaScript.
- [jQuery](https://jquery.com/)
    - Used in this project to simplify manipulation of the DOM.
- [BootStrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
    - Used to simplify the structure of this project and assist in responsiveness.
- [FontAwesome](https://fontawesome.com/)
    -Used in this project to place icons on the mute button.
- [Google Fonts](https://fonts.google.com/)
    - Used in this project to style the text.
- [VScode](https://code.visualstudio.com/)
    - This developer used VScode as the IDE to build the game.
    - **Prettier** extension used to help with formatting code.
    - **Spell Right** was used to assist with spell checking.
- [GitHub](https://github.com/)
    - This project used GitHub to store project code.

## Testing 

All testing of this project can be found here on [testing.md](testing.md) on a separate file.

## Deployment

## Credits

### Media

#### Images

- Mole sprite sheet is open source content retrieved from [lepunk](https://github.com/lepunk/react-native-videos/blob/whack-a-mole/WhackAMole/assets/img/sprites.png) and is free to use.

- Background image was sourced from [lepunk](https://github.com/lepunk/react-native-videos/blob/whack-a-mole/WhackAMole/assets/img/background.png) and is free to use.

#### Audio

- Audio used for whacking moles was taken from [FreeSound](https://freesound.org/people/Qat/sounds/114684/)

- Background music taken from [chosic](https://www.chosic.com/download-audio/?t=24995&tag=Games) and was created by Komiku.

### Code

- Function on line 2 of main.js taken from [StackoverFlow](https://stackoverflow.com/questions/1012140/delaying-a-jquery-script-until-everything-else-has-loaded) written by Jose Basilio

- How to play audio in JavaScript was taken from [StackoverFlow](https://stackoverflow.com/questions/9419263/how-to-play-audio) written by Uri.

- How mute and unmute audio was taken from [StackoverFlow](https://stackoverflow.com/questions/7798530/mute-and-unmute-button-toggle-html5-audio/7798585#7798585) written by Esailija.

- How to store objects to local storage was taken from [stackoverFlow](https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage) written by Christian C. Salvadó

How to build a highscore leader board was greatly assisted by [James Q quick](https://www.youtube.com/watch?v=DFhmNLKwwGw)

#### Educational Credit

- [Code Institute](https://www.codeinstitute.net/) Where 99% of this developers knowledge of JavaScript comes from.

- [DailyJS](https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa) For helping with this developer to understand how to animate a sprite sheet and why its more efficient.

- [CSS-tricks](https://css-tricks.com/best-way-implement-wrapper-css/) Clarifying why to use wrapper class over container class.

- [w3schools](https://www.w3schools.com/tags/av_prop_playbackrate.asp) How to increase playback speed. 

- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) How to sort through an objects values.

### Acknowledgements

- This developer's Mentor Caleb Mbakwe, who
- Sean Young at Code Institute who was lead of the interactive-frontend channel at the time of this projects creation and helped guide this developer in the right direction when trying to increase difficulty while playing the game.


### Content

- All text was written by the developer.



  
