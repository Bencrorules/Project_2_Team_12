//plays sound of bullet hitting ship
const hitSound = () => {
    let hit = new Audio('sea_explosion.wav');
    hit.loop = false;
    hit.play();
}

//plays sound of water splashing
const missSound = () => {
    let miss = new Audio('water_splash.mp3');
    miss.loop = false;
    miss.play();
}

//plays sound of an error notification
const doubleClick = () => {
  let dc = new Audio("alert.wav");
  dc.loop = false;
  dc.play();
}
