const canvas = document.getElementById("canvas"); // Retrieves canvas element
const context = canvas.getContext("2d"); // gives access to built-in drawIn API

// Sets the width and height of the canvas element to the size of the window
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Loads images
const images = {}; // assign an object to hold all the images
images.mole = new Image(); // Will add new mole object to images
images.mole.src = "imagesmoles-sprite_sheet.png";

const moleWidth = "190"; // Line 13 and 14 are one frame from the spritesheet
const moleHeight = "144";
let moleFrameX = 3; // line 15 and 16 selects which image is drawn from the spritesheet
let moleFrameY = 3;
let moleX = 0; // line 17 and 18 selects where on the canvas the image will be drawn
let moleY = 0;
const moleSpeed = 6;
/*
 drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH)
    Takes 9 attributes: 
    - the first is the image we want to draw
    - the next 4 are source x, y, width and height and specifiy the from
    the image selected in the first attribute
    - the last for 4 are destination x, y, width and height and decide
    where on the canvas the image will be drawn and how big it will be
*/
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  context.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH); // this function is here so it can be called multiple times
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height); // clears the area
  // call drawSprite() and add in the attributes I need
  drawSprite(
    images.mole,
    moleWidth * moleFrameX,
    moleHeight * moleFrameY,
    moleWidth,
    moleHeight,
    moleX,
    moleY,
    moleWidth,
    moleHeight
  );
}

window.onload = setInterval(animate, 1000/30);
