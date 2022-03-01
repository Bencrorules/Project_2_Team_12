const placeRandomizedShips = () => {
    //initializes randomized variables
    let randomI = 0;
    let randomJ = 0;
    let randomDirection = "horizontal";

    while (secondBoardDone == false) {
        //generates random numbers from 0 and 9
        randomI = Math.floor(Math.random() * 10) + 1;
        randomJ = Math.floor(Math.random() * 10) + 1;
        //generates random number from 0 to 1
        let x = Math.floor(Math.random() * 2);
        if (x == 0) {
            randomDirection = "horizontal";
        }
        else {
            randomDirection = "vertical";
        }

        placingShips(randomI, randomJ, randomDirection);
    }
}

const artificialTurn = () => {
    if(difficulty == 1) artificialTurnEasy();
    else if(difficulty == 2) artificialTurnMedium();
    else if(difficulty == 3) artificialTurnHard();
}

const artificialTurnEasy = () => {
    randomI = Math.floor(Math.random() * 10) + 1;
    randomJ = Math.floor(Math.random() * 10) + 1;
    let chosenSquare = document.getElementsByClassName(`${randomI},${randomJ}e`)[0]
    checkIfHitInFirst(chosenSquare);
}

const artificialTurnMedium = () => {

}

const artificialTurnHard = () => {
    let count = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if(visitedArrayForFirst[i][j]) count++
            if(count == Math.floor(turnSwitch/2) + 1) {
                randomI = i;
                randomJ = j;
                i = 10
                j = 10
            }
        }
    }
    let chosenSquare = document.getElementsByClassName(`${randomI + 1},${randomJ + 1}e`)[0]
    checkIfHitInFirst(chosenSquare);
}
