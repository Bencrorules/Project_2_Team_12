let shipDirection = ""

let firstBoardDone = false;
let secondBoardDone = false;

let direction = "horizontal";

// This function comes to play when u click at a specific index inside the grid, whether to let you
// click or not is determined by this function.
const placingShips = (i,j,direction) => {
    //is FirstBoard Done Placing?
    if(firstBoardDone == false)
    {
        if(validIndexForFirst(i,j,direction,numOfShips) == true)
        {
            //if not work on firstBoard
            let color = ""

            //fifth ships color
            if(numOfShips == 5)
            {
                color = "carrier";
            }
            //fourth ships color
            else if(numOfShips == 4)
            {
                color = "battleship"
            }
            //third ships color
            else if(numOfShips == 3)
            {
                color = "cruiser"
            }
            //second ships color
            else if(numOfShips == 2)
            {
                color = "submarine"
            }
            //first ships color
            else
            {
                color = "destroyer"
            }
            

            //runs a for loop to place the ship in the right index.
            for(let k = 0; k < numOfShips; k++)
            {
                visitedArrayForFirst[i-1][j-1] = true;
                var toHit = document.getElementsByClassName(`${i},${j}`)[0]
                toHit.classList.add(color);               
                if(direction == "vertical")
                {
                    //if the direction the user has is vertical, then the i++ will be increased.
                    i++;
                }
                else
                {
                    // else j++ is increased i.e horizontal
                    j++;
                }
            }
            
            //number of ship is decreased after each placement of ship
            numOfShips--;
            //update the description box accordingly.
            updateShipText();
        

            console.log(visitedArrayForFirst);
            if(numOfShips == 0)
            {
                firstBoardDone = true;
                secondBoardDone = false;

                setTimeout(()=> {
                    RenderFirstOrSecondBoard();
                },300)
            }  
        } 	
    }
    else //work on second board if first done = true.
    //They are essentially kind of same except for the arrays that we use, we use ships[] array for first board and boxes[] array for second board
    {
        if(validIndexForSecond(i,j,direction,numOfShips) == true)
        {
            //if not work on firstBoard
            let color = ""

            //fifth ships color
            if(numOfShips == 5)
            {
                color = "carrier";
            }
            //fourth ships color
            else if(numOfShips == 4)
            {
                color = "battleship"
            }
            //third ships color
            else if(numOfShips == 3)
            {
                color = "cruiser"
            }
            //second ships color
            else if(numOfShips == 2)
            {
                color = "submarine"
            }
            //first ships color
            else
            {
                color = "destroyer"
            }
            

            //runs a for loop to place the ship in the right index.
            for(let k = 0; k < numOfShips; k++)
            {
                visitedArrayForSecond[i-1][j-1] = true;
                var toHit = document.getElementsByClassName(`${i},${j}e`)[0]
                toHit.classList.add(color);
                if(direction == "vertical")
                {
                    //if the direction the user has is vertical, then the i++ will be increased.
                    i++;
                }
                else
                {
                    // else j++ is increased i.e horizontal
                    j++;
                }
                
                
            }
            //number of ship is decreased after each placement of ship
            numOfShips--;
            //update the description box accordingly.
            updateShipText();
        

            console.log(visitedArrayForSecond);
            if(numOfShips == 0)
            {
                firstBoardDone = true;
                secondBoardDone = true;

                setTimeout(()=> {
                    RenderFirstOrSecondBoard();
                },300)
                
            }
        }
        
    }
    
}

