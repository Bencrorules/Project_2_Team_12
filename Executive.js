//gets the orientation that the user wants. Listens to the radio buttons on homepage
const getOrientation = (orientation) => {
    let radios = document.getElementsByName('orientation').value = orientation
    direction = radios;
}

//updates the text of which ship the user needs to place next
const updateShipText = () => {
  let inner = document.getElementsByClassName('log-wrapper')[0] 
  if(numOfShips>0)
  {
    inner.innerHTML = `Player ${playerNow}, Please place your 1x${numOfShips} ship`
  }     
}

//The calls to this function are made from placingShips.js.
//It is used for rendering the second board after the first board is done placing ships.
//If both boards are done, this is what shows up the "Start Game" button.
const RenderFirstOrSecondBoard = () => {
  //this function is called after all the ships in the first board is placed
  if (firstBoardDone == true && secondBoardDone == false) {
    //if ships are placed in first board but not the second board
    numOfShips = originalNum
    //Hide First Board
    gameBoardContainer1.classList.add("invisible");
    gameBoardContainer2.classList.remove("hidden");
    //Render second board
    renderSecondBoard();
    playerNow = 2;
    updateShipText();
  } else if (firstBoardDone == true && secondBoardDone == true) {
    //if both boards are done placing ships then render the "Start Game" button by removing the class of hidden
    startGameDiv.classList.remove("hidden");
    let inner = document.getElementsByClassName('log-wrapper')[0] 
    inner.innerHTML = "Press 'Start Game' Below to start the game !!!";
  }
}

//Before start game is clicked, the first board is hidden cause second player place ships at last
const startGame = () => {
  //After start game is clicked,the first board is now visible cause we remove the class called "hidden" i.e PlayerOne can see his board
  gameBoardContainer1.classList.remove("invisible");
  gameBoardContainer2.classList.add("hidden");

  //We now render the back of second board to hide the second board i.e Player One can't see opponents board
  renderBackOfSecondBoard();

  //we don't need the "Start Game" div anymore because we already now started the game so let's hide it.
  startGameDiv.classList.add("hidden");

  let inner = document.getElementsByClassName('log-wrapper')[0] 
  inner.innerHTML = "Player 1's turn, FIRE !!!"

  //now we should instead make the "Switch Team" visible by removing the "hidden class from it"
}

//This is what starts the game by prompting the user.
let originalNum = prompt("Enter the number of ships that you want to play with ( 1 to 5) ");
//unless number between 1 to 5 is entered it will keep prompting the user.
if(isNaN(originalNum) || originalNum <= 0 || originalNum > 5)
{
  location.reload();
}
let numOfShips = originalNum;

//difficulty selector prompt. reloads if bad input
let originalDifficulty = prompt("Choose your AI difficulty (1 = Easy, 2 = Medium, 3 = Hard) ");
if(isNaN(originalDifficulty) || originalDifficulty <= 0 || originalDifficulty > 3)
{
  location.reload();
}
let difficulty = originalDifficulty;

//this is what starts the game; it is defined in boardSetup.js
renderFirstBoard();
let playerNow = 1;
updateShipText();

/* The lines below aren't to be mistaken with Starting the Game, 
they come into play after both players have placed ships 
and they click on "Start game" */

// Grabbing The Start Game Box That pops up after both players place ships
let startGameDiv = document.querySelector("#prompter");
// Grabbing the button inside that box
let startGameButton = document.getElementById("clicker");

//After the user clicks on the "Start Game" button it fires a function called startGame();
startGameButton.addEventListener("click", () => {
  startGame();
});

