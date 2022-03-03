//gets the orientation that the user wants. Listens to the radio buttons on homepage
const getOrientation = (orientation) => {
    let radios = document.getElementsByName('orientation').value = orientation
    direction = radios;
}

//updates the text of which ship the user needs to place next. Removes direction prompt once 1x1 ship is being placed and for rest of game
const updateShipText = () => {
  let inner = document.getElementsByClassName('log-wrapper')[0] 
  if(numOfShips>0)
  {
    inner.innerHTML = `Player ${playerNow}, Please place your 1x${numOfShips} ship`
    if (numOfShips == 1)
    {
      let horizontalLabel = document.getElementById("horizontalLabel");
      horizontalLabel.remove();
      let verticalLabel = document.getElementById("verticalLabel");
      verticalLabel.remove();
      let directionPrompt = document.getElementById("directionPrompt");
      directionPrompt.remove();
    }
  }     
}

//The calls to this function are made from placingShips.js.
//It is used for rendering the second board after the first board is done placing ships.
//If both boards are done, this is what shows up the "Start Game" button.
const RenderFirstOrSecondBoard = () => {
  //this function is called after all the ships in the first board is placed
  if (firstBoardDone == true && secondBoardDone == false) {
    //if ships are placed in first board but not the second board
    numOfShips = originalNum;
    //Render second board
    renderSecondBoard();
    playerNow = 2;

    //Hide First Board and updates text prompt (not needed for AI game)
    if (opponent == 1) {
      gameBoardContainer1.classList.add("invisible");
      gameBoardContainer2.classList.remove("hidden");
      updateShipText();
    }
    else {
      gameBoardContainer2.classList.add("hidden");
      //renderBackOfSecondBoard();
      placeRandomizedShips();
    }
  } 
  else if (firstBoardDone == true && secondBoardDone == true) {
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

  restartGameDiv.classList.remove("option");

  let inner = document.getElementsByClassName('log-wrapper')[0] 
  inner.innerHTML = "Player 1's turn, FIRE !!!"

  //now we should instead make the "Switch Team" visible by removing the "hidden class from it"
}

const restartGame = () => {
  let isRestart = confirm("Would you like to restart the game?");
  console.log(isRestart);
  if (isRestart)
  {
    location.reload();
  }
}

//This is what starts the game by prompting the user.
let originalOpponent = prompt("Would you like to play with a human or against the machine? (1 = human, 2 = machine) ");
//unless number 1 or 2 is entered it will keep prompting the user.
while(isNaN(originalOpponent) || originalOpponent <= 0 || originalOpponent > 2)
{
  originalOpponent = prompt("Would you like to play with a human or against the machine? (1 = human, 2 = machine) ");
}
let opponent = originalOpponent;

let originalNum = prompt("Enter the number of ships that you want to play with ( 1 to 5) ");
//unless number between 1 to 5 is entered it will keep prompting the user.
while(isNaN(originalNum) || originalNum <= 0 || originalNum > 5)
{
  originalNum = prompt("Enter the number of ships that you want to play with ( 1 to 5) ");
}
let numOfShips = originalNum;

let difficulty = 0;
if(opponent == 2)
{
  //difficulty selector prompt. reloads if bad input
  let originalDifficulty = prompt("Choose your AI difficulty (1 = Easy, 2 = Medium, 3 = Hard) ");
  while(isNaN(originalDifficulty) || originalDifficulty <= 0 || originalDifficulty > 3)
  {
    originalDifficulty = prompt("Choose your AI difficulty (1 = Easy, 2 = Medium, 3 = Hard) ");
  }
  difficulty = originalDifficulty;
}

//this is what starts the game; it is defined in boardSetup.js
renderFirstBoard();
let playerNow = 1;
updateShipText();

/* The lines below aren't to be mistaken with Starting the Game, 
they come into play after both players have placed ships 
and they click on "Start game" */

// Grabbing The Start Game Box That pops up after both players place ships
let startGameDiv = document.querySelector("#prompter");

let restartGameDiv = document.querySelector("#restart-prompter");
// Grabbing the button inside that box
let startGameButton = document.getElementById("clicker");

let restartGameButton = document.getElementById("restarter");

//After the user clicks on the "Start Game" button it fires a function called startGame();
startGameButton.addEventListener("click", () => {
  startGame();
}),
restartGameButton.addEventListener("click", () => {
  restartGame();
});

