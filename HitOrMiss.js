let turnSwitch = 0;
const checkIfHitInFirst = (fakebox) => {
  let i = fakebox.i;
  let j = fakebox.j;

  //uses mod operator to find out whose turn.
  if (turnSwitch % 2 == 0) {
    alert("Player 2, you took your turn... Switch now!");
  } else {
    //if hitarrayforfirst is true or false.
    if(HitArrayForFirst[i][j] == true || HitArrayForFirst[i][j] == false)
    {
      //then that space is already hit.
      //so we need to say the user to place in another index.
      //also update the description box with that message.
      let inner = document.getElementsByClassName('log-wrapper')[0]
      inner.innerHTML = "Already clicked that space. Try again !"
    }
    else
    {
      //if the visited array has a true index on it.
      if (visitedArrayForFirst[i][j]) {
        //then its a hit.
        //the hit array needs to be updated.
        HitArrayForFirst[i][j] = true;
        //the class of hit-box will be added to the box which was hit.
        fakebox.classList.add(".hit-box");
        fakebox.innerHTML = "✅";

        //the description box will be changed accordingly
        let inner = document.getElementsByClassName('log-wrapper')[0]
        inner.innerHTML = "HIT !!! Switch Team now."
        var toHit = document.getElementsByClassName(`${i+1},${j+1}`)[0]
        toHit.innerHTML = "HIT";
      } else {
        //else its a miss.
        HitArrayForFirst[i][j] = false;
        //add the class of miss to the box.
        fakebox.classList.add(".miss-box");
        fakebox.innerHTML = "❌";

        //update the description accordingly.
        let inner = document.getElementsByClassName('log-wrapper')[0]
        inner.innerHTML = "MISS !!! Switch Team now.";
      }

      //check if the win is in first board
      if (checkIfWinInFirst() == true) {
        setTimeout(() => {
          //alert if its a win
          alert("Player 2 WINS!!");
        }, 200);

        //then reload the page
        setTimeout(() => {
          location.reload();
        }, 200);
      }

      //update team switch variable.
      turnSwitch++;
      switchTeam.classList.remove("hidden");
    }
  }
};

//Checks hit or miss,  the same logic applies.
const checkIfHitInSecond = (fakebox) => {
  let i = fakebox.i;
  let j = fakebox.j;
  //uses mod operator to find out whose turn.
  if (turnSwitch % 2 == 1) {
    alert("Player 1, you took your turn... Switch now!");
  } else {
    //if hitarrayforfirst is true or false.
    if(HitArrayForSecond[i][j] == true || HitArrayForSecond[i][j] == false)
    {
      //then that space is already hit.
      //so we need to say the user to place in another index.
      //also update the description box with that message.
      let inner = document.getElementsByClassName('log-wrapper')[0]
      inner.innerHTML = "Already clicked that space. Try again !"
    }
    else
    {
      //if the visited array has a true index on it.
      if (visitedArrayForSecond[i][j]) {
        HitArrayForSecond[i][j] = true;
        //then its a hit.
        //the hit array needs to be updated.
        fakebox.classList.add(".hit-box");
        fakebox.innerHTML = "✅";
        //the description box will be changed accordingly
        let inner = document.getElementsByClassName('log-wrapper')[0]
        if(opponent == 1) inner.innerHTML = "HIT!!! Switch Team now.";
        else inner.innerHTML = "HIT!!! The AI will take its turn now.";
        //the description box will be changed accordingly
        var toHit = document.getElementsByClassName(`${i+1},${j+1}e`)[0]
        toHit.innerHTML = "HIT";

      } else {
        HitArrayForSecond[i][j] = false;
        //add the class of miss to the box.
        fakebox.classList.add(".miss-box");
        fakebox.innerHTML = "❌";
        //the description box will be changed accordingly
        let inner = document.getElementsByClassName('log-wrapper')[0]
        if(opponent == 1) inner.innerHTML = "MISS!!! Switch Team now.";
        else inner.innerHTML = "MISS!!! The AI will take its turn now.";
      }

      if (checkIfWinInSecond() == true) {
        setTimeout(() => {
          alert("Player 1 WINS!!");
        }, 200);

        setTimeout(() => {
          location.reload();
        }, 200);
      }

      turnSwitch++;
      if(opponent == 1) {
        switchTeam.classList.remove("hidden");
      } else {
        artificialTurn();
      }
    }
  }
};


//this function checks if its a win in the first board.
const checkIfWinInFirst = () => {
  let hitCountFirst = 0;
  //running double for loop to check HitArray
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {

      if (HitArrayForFirst[i][j] == true) {
        hitCountFirst++;
      }
    }
  }
  if (hitCountFirst == findTotalClickCount(parseInt(originalNum))) {
    return true;
  } else {
    return false;
  }
};

//this fucntion checks if its a win in the second board
const checkIfWinInSecond = () => {
  let hitCountSecond = 0;

  //running double for loop to check HitArray
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (HitArrayForSecond[i][j] == true) {
        hitCountSecond++;
      }
    }
  }
  if (hitCountSecond == findTotalClickCount(parseInt(originalNum))) {
    return true;
  } else {
    return false;
  }
};

//using recursion to find the total count of 'hit' clicks we need for a win.
const findTotalClickCount = (maxClick) => {
  if (maxClick == 0) {
    return 0;
  } else {
    return maxClick + findTotalClickCount(maxClick - 1);
  }
}
