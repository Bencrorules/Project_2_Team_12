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