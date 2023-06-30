console.log('Space Battle Game');

class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    }

    attack() {
        if (Math.random() < this[0].accuracy) {
            console.log('You have been hit!');
        }
    }


}

function random(x, y){
    return Math.floor(Math.random() * x) + y;
}

// console.log(random());

// const shipOne = new Ship(20, 5, '.7');

// console.log(shipOne);



// create alien ships
// const alienShip = [];

let alienShip = [];
// let hull = Math.floor(Math.random()*(6-3)+3) + 1;
// let firepower = Math.floor(Math.random()*(4-2) + 2) + 1;
// let attack = Math.random()*(.8-.6)+.6;

for (let i = 0; i < 6; i++) {
    let hull = Math.floor(Math.random()*(6-3)+3) + 1;
    let firepower = Math.floor(Math.random()*(4-2) + 2) + 1;
    let attack = Math.random()*(.8-.6)+.6;
    alienShip[i] = [hull, firepower, attack];
}

// console.log(alienShip);
console.log(alienShip);
const alien = new Ship(alienShip[0][0], alienShip[0][1], alienShip[0][2]);

console.log(alien);
