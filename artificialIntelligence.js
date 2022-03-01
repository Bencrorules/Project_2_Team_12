let aiSearching = true;
let hits = 0;
let randomDirection = 0;
let randomI = 0;
let randomJ = 0;

const placeRandomizedShips = () => {
    //initializes randomized variables
    let randomDirectionString = "horizontal";

    while (secondBoardDone == false) {
        //generates random numbers from 0 and 9
        randomI = Math.floor(Math.random() * 10) + 1;
        randomJ = Math.floor(Math.random() * 10) + 1;
        //generates random number from 0 to 1
        let x = Math.floor(Math.random() * 2);
        if (x == 0) {
            randomDirectionString = "horizontal";
        }
        else {
            randomDirectionString = "vertical";
        }

        placingShips(randomI, randomJ, randomDirectionString);
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
    if (hits == 0) {
        artificialTurnEasy();
    }
    else if (hits > 0) {
        if(hits == 1) {
            randomDirection = Math.floor(Math.random() * 4);
            aiSearching = false;
        }
        else if(aiSearching == true) {
            hits = 1;
            aiSearching = false;
            if(randomDirection == 0) randomDirection = 1
            else if(randomDirection == 1) randomDirection = 0
            else if(randomDirection == 2) randomDirection = 3
            else if(randomDirection == 3) randomDirection = 2
        }
        if(randomDirection == 0 && aiSearching == false) {
            if((randomI + hits) <= 10 && (randomI + hits) >= 1) checkIfHitInFirst(document.getElementsByClassName(`${randomI + hits},${randomJ}e`)[0])
            else {
                aiSearching = true
                artificialTurnMedium();
            }
        }
        else if(randomDirection == 1 && aiSearching == false) {
            if((randomI - hits) <= 10 && (randomI - hits) >= 1) checkIfHitInFirst(document.getElementsByClassName(`${randomI - hits},${randomJ}e`)[0])
            else {
                aiSearching = true
                artificialTurnMedium();
            } 
        }
        else if(randomDirection == 2 && aiSearching == false) {
            if((randomJ + hits) <= 10 && (randomJ + hits) >= 1) checkIfHitInFirst(document.getElementsByClassName(`${randomI},${randomJ + hits}e`)[0])
            else {
                aiSearching = true
                artificialTurnMedium();
            } 
        }
        else if(randomDirection == 3 && aiSearching == false) {
            if((randomJ - hits) <= 10 && (randomJ - hits) >= 1) checkIfHitInFirst(document.getElementsByClassName(`${randomI},${randomJ - hits}e`)[0])
            else {
                aiSearching = true
                artificialTurnMedium();
            } 
        }
    }
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
