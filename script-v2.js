console.log('*** Space Battle Game ***');

class Ship {
    constructor(ship, hull, firepower, accuracy) {
        this.ship = ship;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    }

    attack(defendant) {

            // console.log("Ship: " + human.ship + " Hull: " + human.hull + " | " + defendant.ship + " Hull: " + defendant.hull)
            console.log(`${this.ship} launches an attack on the ${defendant.ship}`);
            if (Math.random() < this.accuracy) {
                console.log(`${defendant.ship} has been hit!`);
                // console.log("Before: " + defendant.hull);
                defendant.hull -= this.firepower;
                // console.log("After: " + defendant.hull);
            } else {
                console.log(`${this.ship} MISSES the ${defendant.ship}!`);
                document.getElementById('message-el').textContent = `${this.ship} Misses the shot!!!`;
                document.getElementById('alien-img').setAttribute('src', 'imgs/alien-miss.jpg');
                setTimeout(function() {document.getElementById('alien-img').setAttribute('src', 'imgs/alien.jpg')}, 500);
                // clearTimeout();
            }

            // console.log(this.hull + ":" + defendant.hull);

            document.getElementById('human-status-el').textContent = `${this.ship} Hull: ${this.hull}`;
            document.getElementById('alien-status-el').textContent = `${defendant.ship} Hull: ${defendant.hull}`;

            if (defendant.hull <= 0) {
                // console.log(`The ${this.ship} has destroyed the ${defendant.ship} ship - ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`);
                document.getElementById('alien-img').setAttribute('src', 'imgs/explosion.jpg');

                document.getElementById('message-el').innerHTML = `The ${defendant.ship} was destroyed!`;
                numShips--; 
                console.log(`The ${defendant.ship} ship has been destroyed! Would you like to Continue or Retreat?`);
                
                // document.getElementById('retreat').style.visibility = 'visible';
            } else {
                console.log(`The ${defendant.ship} has endured damage. Hull strength is at ${defendant.hull}`);
                // this.attack(defendant);
            }


            // console.log(`- ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`);

            // document.getElementById('human-status-el').innerHTML = `${this.ship} Hull: ${this.hull}`;
            // // humanMessageEl.innerHTML = `The ${defendant.ship} was destroyed!`;

            // document.getElementById('alien-status-el').innerHTML = `${defendant.ship} Hull: ${defendant.hull}`;
            // // alienMessageEl.innerHTML = `The ${defendant.ship} was destroyed!`;

    }

    retreat() {
        console.log('Im getting outta here!')
    }

    deploy() {

    }
    
}

// let numShips = prompt('Number of ships to deploy');
let numShips = 6;

// create an array of human and alien ships
let ussAssembly = [];
let alienShip = [];

for (let i = 0; i < numShips; i++) {
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


// console.log(ussAssembly);
const human = new Ship(ussAssembly[0][0], ussAssembly[0][1], ussAssembly[0][2], ussAssembly[0][3]);

// console.log(human);
// console.log(`${human.ship} - Hull: ${human.hull}, Firepower: ${human.firepower}, Acurracy: ${human.accuracy}`);

// console.log(alienShip);
const alien = new Ship(alienShip[0][0], alienShip[0][1], alienShip[0][2], alienShip[0][3]);

// console.log(alien);
// console.log(`${alien.ship} - Hull: ${alien.hull}, Firepower: ${alien.firepower}, Acurracy: ${alien.accuracy}`);

document.getElementById('human-status-el').textContent = `Ships: ${numShips} | ${human.ship} Hull: ${human.hull}`;
document.getElementById('alien-status-el').textContent = `Ships: ${numShips} | ${alien.ship} Hull: ${alien.hull}`;

// const imgEl = document.createElement('img');

document.addEventListener('click', (e) => {
    switch (e.target.textContent) {
        case 'Attack':
            // console.log("Attack Button")
            human.attack(alien);
            // alien.attack(human);
            break;
        case 'Retreat':
            // console.log("Retreat Button")
            human.retreat();
            break;    
    }
});



