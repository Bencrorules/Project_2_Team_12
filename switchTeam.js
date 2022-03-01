//This function switches teams, i.e Hide one and show other, show other hide one
//since it used %2 == 0, the turns are switched perfectly

let switchTeam = document.querySelector("#switchTeam");
let kun = 0;
switchTeam.addEventListener("click", () => {
    if (kun % 2 == 0) 
    {
        turnOverlayOn(); // toggles the overlay that needs user to press "g"; done to make the game realistic multiplayer
        gameBoardContainer1.classList.add("hidden"); //first board is hidden
        gameBoardContainer2.classList.remove("hidden"); //second board is shown
        renderBackOfFirstBoard();
        backOfSecond.classList.add("hidden"); 

        backOfFirst.classList.remove("hidden");
        let inner = document.getElementsByClassName('log-wrapper')[0] 
        inner.innerHTML = "Player 2's turn, FIRE !!!"
    }
    else {
        turnOverlayOn(); // toggles the overlay that needs user to press "g"; done to make the game realistic multiplayer
        gameBoardContainer2.classList.add("hidden"); //second board is hidden
        backOfSecond.classList.remove("hidden"); 
        renderBackOfSecondBoard();
        backOfFirst.classList.add("hidden");
        gameBoardContainer1.classList.remove("hidden"); //first board is hidden
        let inner = document.getElementsByClassName('log-wrapper')[0] 
        inner.innerHTML = "Player 1's turn, FIRE !!!"
    }
    kun++;
    switchTeam.classList.add("hidden");
});