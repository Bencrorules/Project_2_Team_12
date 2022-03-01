let backOfFirst = document.getElementById("backOfFirst"); 

//Renders the back of first board on top of it. built similarly like the initial board.
const renderBackOfFirstBoard = () => {
  backOfSecond.classList.remove("hidden");
  backOfFirst.innerHTML = "";
  let secondAlphaNum = 0;
  let secondNum = 0;
  let idIndex = 1;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      let square = document.createElement("div");
      square.setAttribute('id',idIndex.toString());
      idIndex++;

      if (i == 0 && !(i == 0 && j == 0)) {
        square.innerHTML = alphabets[secondAlphaNum];
        secondAlphaNum++;
      }
      if (j == 0 && !(i == 0 && j == 0)) {
        square.innerHTML = numbers[secondNum];
        secondNum++;
      }

      backOfFirst.appendChild(square);

      if (!(i == 0 || j == 0)) {
        square.i = i - 1;
        square.j = j - 1;

        //when clicked on the buttons in the back of the first board, it is checked if it's a hit or miss by function in HitOrMiss.js
        square.addEventListener("click", () => checkIfHitInFirst(square));
      }

      let topPosition = i * squareSize;
      let leftPosition = j * squareSize;

      square.style.top = topPosition + "px";
      square.style.left = leftPosition + "px";

      if (square.i >= 0 && square.j >= 0) {
        if (HitArrayForFirst[parseInt(square.i)][parseInt(square.j)] == true) {
          //if it is a hit, put in an indicator for it
          square.classList.add(".hit-box");
          square.innerHTML = "✅";
        } else if (
          HitArrayForFirst[parseInt(square.i)][parseInt(square.j)] == false
        ) {
          //if it is a hit, put in an indicator for it
          square.classList.add(".miss-box");
          square.innerHTML = "❌";
        }
      }
    }
  }
};

let backOfSecond = document.getElementById("backOfSecond");

//Renders the back of second board on top of it. built similarly like the initial board.
const renderBackOfSecondBoard = () => {
  backOfSecond.classList.remove("hidden");
  backOfSecond.innerHTML = "";
  let secondAlphaNum = 0;
  let secondNum = 0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      let square = document.createElement("div");

      if (i == 0 && !(i == 0 && j == 0)) {
        square.innerHTML = alphabets[secondAlphaNum];
        secondAlphaNum++;
      }
      if (j == 0 && !(i == 0 && j == 0)) {
        square.innerHTML = numbers[secondNum];
        secondNum++;
      }
      backOfSecond.appendChild(square);
      if (!(i == 0 || j == 0)) {
        square.i = i - 1;
        square.j = j - 1;

        //when clicked on the buttons in the back of the second board, it is checked if it's a hit or miss by function in HitOrMiss.js
        square.addEventListener("click", () => checkIfHitInSecond(square));
      }

      let topPosition = i * squareSize;
      let leftPosition = j * squareSize;

      square.style.top = topPosition + "px";
      square.style.left = leftPosition + "px";

      if (square.i >= 0 && square.j >= 0) {
        if (HitArrayForSecond[parseInt(square.i)][parseInt(square.j)] == true) {
          //if it is a hit, put in an indicator for it
          square.classList.add(".hit-box");
          square.innerHTML = "✅";
        } else if (
          HitArrayForSecond[parseInt(square.i)][parseInt(square.j)] == false
        ) {
          //if it is a hit, put in an indicator for it
          square.classList.add(".miss-box");
          square.innerHTML = "❌";
        }
      }
    }
  }
};
