let squareSize = 40;
let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let alphaNum = 0;
let num = 0;
let secondAlphaNum = 0;
let secondNum = 0;
let colors = ["red", "pink", "white", "orange", "yellow"];


//grabbing the HTML element with id firstGameBoard
let gameBoardContainer1 = document.getElementById("firstGameBoard");

// This function renders the First board 
const renderFirstBoard = () => {

  //run the loop 11 times cause we also need the first row and column for board indexes.
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {

      //make a new box container to put in all the boxes of the grid
      let square = document.createElement("div");

      //ignores the i = 0 ,j = 0 index to not have anything in it cause we dont need it
      if (i == 0 && !(i == 0 && j == 0)) {
        square.innerHTML = alphabets[alphaNum];
        alphaNum++;
      }

      //set the first row to have the numbers from one to 10.
      if (j == 0 && !(i == 0 && j == 0)) {
        square.innerHTML = numbers[num];
        num++;
      }

      //append all the boxes into the main container.
      gameBoardContainer1.appendChild(square).className = `${i},${j}`;

      //if set box.i and box.j properties to i-1, j-1 cause we dont need first and last 
      if (!(i == 0 || j == 0)) {
        square.i = i - 1;
        square.j = j - 1;

        // When you click on any of the small boxes inside the grid, a function called placingShips()
        // is fired which is inside placingShips.js with the specific index of that specific small box

        square.addEventListener("click", () => placingShips(i,j,direction));
      }
      
 
      // set each grid square's coordinates: multiples of the current row or column number
      let topPosition = i * squareSize;
      let leftPosition = j * squareSize;

      // use CSS absolute positioning to place each grid square on the page
      square.style.top = topPosition + "px";
      square.style.left = leftPosition + "px";
    }
  }
};

let gameBoardContainer2 = document.getElementById("secondGameBoard");

//This function renders the Second Board
const renderSecondBoard = () => {
  shipDirection = "";

  //run the loop 11 times cause we also need the first row and column for board indexes.
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      //make a new box container to put in all the boxes of the grid
      let box = document.createElement("div");

      //ignore the i =0 ,j = 0 index to not have anything in it cause we dont need it
      if (i == 0 && !(i == 0 && j == 0)) {
        box.innerHTML = alphabets[secondAlphaNum];
        secondAlphaNum++;
      }

      //set the first row to have the numbers from one to 10.
      if (j == 0 && !(i == 0 && j == 0)) {
        box.innerHTML = numbers[secondNum];
        secondNum++;
      }

      //append all the boxes into the main container.
      gameBoardContainer2.appendChild(box).className = `${i},${j}e`;

      //if set box.i and box.j properties to i-1, j-1 cause we dont need first and last 
      if (!(i == 0 || j == 0)) {
        box.i = i - 1;
        box.j = j - 1;

        // When you click on any of the small boxes inside the grid, a function called placingShips()
        // is fired which is inside placingShips.js with the specific index of that specific small box
        box.addEventListener("click", () => placingShips(i,j,direction));
      }

      // set each grid square's coordinates: multiples of the current row or column number
      let topPosition = i * squareSize;
      let leftPosition = j * squareSize;


      // use CSS absolute positioning to place each grid square on the page
      box.style.top = topPosition + "px";
      box.style.left = leftPosition + "px";
    }
  }
};
