console.log('*** Space Battle Game ***');

class Ship {
    constructor(ship, hull, firepower, accuracy) {
        this.ship = ship;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    }

    attack(defendant) {
            // console.log(this);
            console.log(defendant);
            // console.log("Ship: " + human.ship + " Hull: " + human.hull + " | " + defendant.ship + " Hull: " + defendant.hull);
            console.log(`${this.ship} launches an attack on the ${defendant.ship}`);
            let currentShip = document.getElementById('alien-img');
            if (Math.random() < this.accuracy) {
                console.log(`${defendant.ship} has been hit!`);
                currentShip.setAttribute('src', 'imgs/alien-damage.png');
                // console.log("Before: " + defendant.hull);
                defendant.hull -= this.firepower;
                // console.log("After: " + defendant.hull);
            } else {
                console.log(`${this.ship} MISSES the ${defendant.ship}!`);
                document.getElementById('message-el').textContent = `${this.ship} Misses the shot!!!`;
                if (defendant.ship === 'Alien') {
                    // currentShip.setAttribute('src', 'imgs/alien-miss-left.png');
                    // currentShip.style.transform = 'scale(0.5) translate(-70%, -70%)';
                    if (defendant.hull < 4) {
                        currentShip.setAttribute('src', 'imgs/alien-miss-left.png');
                        currentShip.style.transform = 'scale(0.5) translate(-70%, -70%)';
                        setTimeout(function() {currentShip.setAttribute('src', 'imgs/alien-damage.png')}, 500);
                    } else {
                        currentShip.setAttribute('src', 'imgs/alien-miss-left.png');
                        currentShip.style.transform = 'scale(0.5) translate(-70%, -70%)';
                        setTimeout(function() {currentShip.setAttribute('src', 'imgs/alien.png')}, 500);
                    }
                    // currentShip.style.transform = 'scale(1) translate(-0%, -0%)';
                // } else {
                //     document.getElementById('human-img').setAttribute('src', 'imgs/human-miss.png');
                //     setTimeout(function() {document.getElementById('human-img').setAttribute('src', 'imgs/human.png')}, 500);
                }
                
                // clearTimeout();
            }

            // console.log(this.hull + ":" + defendant.hull);

            // document.getElementById('human-status-el').textContent = `Ships: ${this.ship} Hull: ${this.hull}`;
            // document.getElementById('alien-status-el').textContent = `Ships: ${defendant.ship} Hull: ${defendant.hull}`;

            document.getElementById('human-status-el').textContent = `Ships: ${humanShips} | ${human.ship} Hull: ${human.hull}`;
            document.getElementById('alien-status-el').textContent = `Ships: ${alienShips} | ${alien.ship} Hull: ${alien.hull}`;

            if (defendant.hull <= 0) {
                // console.log(`The ${this.ship} has destroyed the ${defendant.ship} ship - ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`);
                if (defendant.ship === 'Alien') {
                    document.getElementById('alien-img').setAttribute('src', 'imgs/explosion.png');
                } else {
                    document.getElementById('human-img').setAttribute('src', 'imgs/explosion.png');
                }
                

                document.getElementById('message-el').innerHTML = `The ${defendant.ship} was destroyed!`;
                numShips--;
                console.log(`The ${defendant.ship} ship has been destroyed! Would you like to Continue or Retreat?`);
                
                // document.getElementById('retreat').style.visibility = 'visible';
            } else {
                console.log(`The ${defendant.ship} has endured damage. Hull strength is at ${defendant.hull}`);
                // this.attack(defendant);
            }
    }

    retreat() {
        console.log('Im getting outta here!')
        document.getElementById('message-el').textContent = "I'm OUTTA HERE!";
    }

    deploy(species) {
        if (species === 'human') {
            if (humanShips > 0) {
                // console.log(ussAssembly);
                const human = new Ship('USS Assembly', 20, 5, .7);
                humanShips--;
            }
        } else {
            if (alienShips > 0) {
                // find a random number between 6 and 3
                let hull = Math.floor(Math.random()*(6-3)+3) + 1;

                // find a random number bewteen 4 and 2
                let firepower = Math.floor(Math.random()*(4-2) + 2) + 1;

                // find a random number between .8 and .6
                let attack = Math.random()*(.8-.6) + .6;

                // console.log(alienShip);
                const alien = new Ship('Alien', hull, firepower, attack);
                alienShips--;
            }

        }
    }
    
}

// let numShips = prompt('Number of ships to deploy (numbers only)');
// let alienShips = numShips;
// let humanShips = numShips;

let alienShips = 6;
let humanShips = 6;

// find a random number between 6 and 3
let hull = Math.floor(Math.random()*(6-3)+3) + 1;

// find a random number bewteen 4 and 2
let firepower = Math.floor(Math.random()*(4-2) + 2) + 1;

// find a random number between .8 and .6
let attack = Math.random()*(.8-.6) + .6;

const alien = new Ship('Alien', hull, firepower, attack);

const human = new Ship('USS Assembly', 20, 5, .7);

// console.log(human);
console.log(`${human.ship} - Hull: ${human.hull}, Firepower: ${human.firepower}, Acurracy: ${human.accuracy}`);

// console.log(alien);
console.log(`${alien.ship} - Hull: ${alien.hull}, Firepower: ${alien.firepower}, Acurracy: ${alien.accuracy}`);

document.getElementById('human-status-el').textContent = `Ships: ${humanShips} | ${human.ship} Hull: ${human.hull}`;
document.getElementById('alien-status-el').textContent = `Ships: ${alienShips} | ${alien.ship} Hull: ${alien.hull}`;

// const imgEl = document.createElement('img');

document.addEventListener('click', (e) => {
    switch (e.target.textContent) {
        case 'Attack':
            // console.log("Attack Button")
            // human.deploy(human);
            human.attack(alien);
            // alien.attack(human);
            break;
        case 'Retreat':
            // console.log("Retreat Button")
            human.retreat();
            break;    
    }
});



