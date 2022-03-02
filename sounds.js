const hitSound = () => {
    let hit = new Audio('sea_explosion.wav');
    hit.loop = false;
    hit.play();
}

const missSound = () => {
    let miss = new Audio('water_splash.mp3');
    miss.loop = false;
    miss.play();
}