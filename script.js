console.log('Space Battle Game');

class Ship {
    constructor(ship, hull, firepower, accuracy) {
        this.ship = ship;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    }

    attack(defendant) {

        // console.log("> " + this.hull + ":" + defendant.hull);
            // console.log("Ship: " + human.ship + " Hull: " + human.hull + " | " + defendant.ship + " Hull: " + defendant.hull)
            if (Math.random() < this.accuracy) {
                console.log(`${defendant.ship} ship has been hit!`);
                console.log("Before: " + defendant.hull);
                defendant.hull -= this.firepower;
                console.log("After: " + defendant.hull);
            } else {
                console.log('You MISSED!');
            }

            console.log(this.hull + ":" + defendant.hull)

            if (defendant.hull <= 0) {
                console.log(`The ${this.ship} has destroyed the ${defendant.ship} ship - ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`);
                console.log(`Would you like to Retreat?`);
            }

            // if (this.hull <= 0) {
            //     console.log(`The ${defendant.ship} has destroyed the ${this.ship} ship - ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`);
  
            // } else if (defendant.hull <= 0) {
            //     console.log(`The ${this.ship} has destroyed the ${defendant.ship} ship - ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`);
            // }

            console.log(`- ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`);

            // humanStatusEl.innerHTML = `- ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`;
            // humanMessageEl.innerHTML = `The ${defendant.ship} was destroyed!`;

            // alienStatusEl.innerHTML = `- ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`;
            // alienMessageEl.innerHTML = `The ${defendant.ship} was destroyed!`;

    }

    retreat() {
        console.log('Im getting outta here!')
    }

    deploy() {

    }
    
}


// create an array of human and alien ships
let ussAssembly = [];
let alienShip = [];

for (let i = 0; i < 6; i++) {
    // find a random number between 6 and 3
    let hull = Math.floor(Math.random()*(6-3)+3) + 1;

    // find a random number bewteen 4 and 2
    let firepower = Math.floor(Math.random()*(4-2) + 2) + 1;

    // find a random number between .8 and .6
    let attack = Math.random()*(.8-.6) + .6;

    alienShip[i] = ['Alien', hull, firepower, attack];

    // static properties for human ships because we are the BEST!
    ussAssembly[i] = ['USS Assembly', 20, 5, .7];
}

let humanStatusEl = document.getElementById('human-status-el');
let humanMessageEl = document.getElementById('human-message-el');

let alienStatusEl = document.getElementById('alien-status-el');
let alienMessageEl = document.getElementById('alien-message-el');


document.getElementById('alien-status-el');

// console.log(ussAssembly);
const human = new Ship(ussAssembly[0][0], ussAssembly[0][1], ussAssembly[0][2], ussAssembly[0][3]);

// console.log(human);
// console.log(`${human.ship} - Hull: ${human.hull}, Firepower: ${human.firepower}, Acurracy: ${human.accuracy}`);

// console.log(alienShip);
const alien = new Ship(alienShip[0][0], alienShip[0][1], alienShip[0][2], alienShip[0][3]);

// console.log(alien);
// console.log(`${alien.ship} - Hull: ${alien.hull}, Firepower: ${alien.firepower}, Acurracy: ${alien.accuracy}`);



document.addEventListener('click', (e) => {
    switch (e.target.textContent) {
        case 'Attack':
            // for (let i = 0; i < ussAssembly.length; i++) {
                console.log("Attack Button")
                human.attack(alien);
                // alien.attack(human);
            // }

            break;
        case 'Retreat':
            console.log("Retreat Button")
            human.retreat();
            break;    
    }
});



