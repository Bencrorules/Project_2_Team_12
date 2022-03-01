// @params: i, j, direction, number of ships
//this function checks whether the placing ships are valid or not.
//checks both overflow from the board and whether it not it will intersect with another board.


//Valid index for the first board
const validIndexForFirst = (i,j,direction,numOfShips) => {

    //if the direction parameter is vertical.
    if(direction == "vertical")
    {
        //check whether the ship will be out of bounds of the board or not.
        // i + numShips should be less than or equal than 11
        if(i + parseInt(numOfShips) <=11)
        {
            //variable to check if the index already has a ship
            let isThere = false;

            //Run a for loop to place the ship/.
            for(let k = 0; k < numOfShips;k++)
            {
                // if the board already has a ship in that index
                if(visitedArrayForFirst[i-1][j-1] == true)
                {
                    //this variable will be true
                    isThere = true;
                }
                i++;
            }
            if(!isThere)
            {
                return true;
            }
            else
            {
                //updates the description box.
                let inner = document.getElementsByClassName('log-wrapper')[0] 
                inner.innerHTML = "It would overlap with another ship, Try again"
            }
        }
        else
        {
            //updates the description box.
            let inner = document.getElementsByClassName('log-wrapper')[0] 
            inner.innerHTML = "Out of bounds"
        }
    }
    //if direction is horizontal
    else if(direction == "horizontal")
    {
        //check whether the ship will be out of bounds of the board or not.
        // i + numShips should be less than or equal than 11
        if(j + parseInt(numOfShips) <=11)
        {
            //variable to check if the index already has a ship
            let isThere = false;

            //Run a for loop to place the ship/.
            for(let k = 0; k < numOfShips;k++)
            {
                if(visitedArrayForFirst[i-1][j-1] == true)
                {
                    
                    console.log('YES')
                    isThere = true;
                }
                j++;
            }

            // if the board already has a ship in that index
            if(!isThere)
            {
                //this variable will be true
                return true;
            }
            else
            {
                //updates the description box.
                let inner = document.getElementsByClassName('log-wrapper')[0] 
                inner.innerHTML = "It would overlap with another ship, Try again"
            }
        }
        else
        {
            //updates the description box.
            let inner = document.getElementsByClassName('log-wrapper')[0] 
            inner.innerHTML = "Out of bounds"
        }
    }
}


//Valid index for the second board, the same logic applies for the second board.
const validIndexForSecond = (i,j,direction,numOfShips) => {
    if(direction == "vertical")
    {
        console.log(i,j,direction,numOfShips)
        //check whether the ship will be out of bounds of the board or not.
        // i + numShips should be less than or equal than 11
        if(i + parseInt(numOfShips) <=11)
        {
            //variable to check if the index already has a ship
            let isThere = false;
            //Run a for loop to place the ship/.
            for(let k = 0; k < numOfShips;k++)
            {
                 // if the board already has a ship in that index
                if(visitedArrayForSecond[i-1][j-1] == true)
                {
                     //this variable will be true
                 
                    isThere = true;
                }
                i++;
            }
            if(!isThere)
            {
                return true;
            }
            else
            {
                if(opponent == 1) {
                    let inner = document.getElementsByClassName('log-wrapper')[0] 
                    inner.innerHTML = "It would overlap with another ship, Try again"
                }
            }
        }
        else
        {
            //updates the description box.
            if(opponent == 1) {
                let inner = document.getElementsByClassName('log-wrapper')[0] 
                inner.innerHTML = "Out of bounds"
            }
        }
    }
    //if direction is horizontal
    else if(direction == "horizontal")
    {
        console.log(i,j,direction,numOfShips)
        //check whether the ship will be out of bounds of the board or not.
        // i + numShips should be less than or equal than 11
        if(j + parseInt(numOfShips) <=11)
        {
             //variable to check if the index already has a ship
            let isThere = false;
            //Run a for loop to place the ship/.
            for(let k = 0; k < numOfShips;k++)
            {
                // if the board already has a ship in that index
                if(visitedArrayForSecond[i-1][j-1] == true)
                {
                   //this variable will be true
                    isThere = true;
                }
                j++;
            }
            if(!isThere)
            {
                return true;
            }
            else
            {
                //updates the description box.
                if(opponent == 1) {
                    let inner = document.getElementsByClassName('log-wrapper')[0] 
                    inner.innerHTML = "It would overlap with another ship, Try again"
                }
            }
        }
        else
        {
            //updates the description box.
            if(opponent == 1) {
                let inner = document.getElementsByClassName('log-wrapper')[0] 
                inner.innerHTML = "Out of bounds"
            }
        }
    }
}