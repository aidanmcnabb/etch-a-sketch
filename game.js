/*
perfect girl
russian song
probably a techno soundtrack
when game over soundtrack stops a PE alaram plays

So what I planned was to have multiple drawings that you must complete in a stack that are swiped in and out after you complete each one.

the 'card' is the master container div
the 'box' is the secondary container div
the 'squares' are the multiple interactable tiles

while playing, the stack should NOT have all of the 'boxes' & 'squares' rendered, only the current 'card' and the 'card' after it
maybe an array of objects will be used to store the data of all the unique card types with a mathRandom function to choose the numbered name of an object at random
the unique card style will have a certain background color for certain hilighted squares
the player will have 4 colors to choose from with the keyboard, likely wasd, with each key press corresponding to a selected color
as the game gets longer it introduces those colors one by one until all 4 colors are introduced
im thinking a master game function that constantly replineshes the stack while also tracking the inputs of the player
inside the scope of the master game function, the input will be sent to a boolean function to check if right tile and the corect color is picked.
the output of the boolean function will be sent to score, timer, hot-o-meter, & stickman animation
score will count each completed card
at the start of the game i would like the opacity of the 'box' and the 'squares' to slowly fade in, or if i can use the white noise filter in an animation time

first off, attempt to make a single card, with a box & squares
second, give the squares input
*/

function masterGame() {

}