console.log('*** Space Battle Game ***');

class Ship {
    constructor(ship, hull, firepower, accuracy) {
        this.ship = ship;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(defendant) {

            console.log(this);
            console.log(defendant);
            // console.log("Ship: " + human.ship + " Hull: " + human.hull + " | " + defendant.ship + " Hull: " + defendant.hull);
            console.log(`${this.ship} takes a shot at the ${defendant.ship}`);
            messageEl.innerHTML += `${this.ship} takes a shot at the ${defendant.ship}\r\n\n`;

            let currentShip = document.getElementById('alien-img');
            if (Math.random() < this.accuracy) {
                // console.log("Before: " + defendant.hull);
                defendant.hull -= this.firepower;
                // console.log("After: " + defendant.hull);

                if (defendant.hull <= 0) {
                    messageEl.innerHTML += `The ${defendant.ship} was destroyed!\r\n\n`;
                    // console.log(`The ${this.ship} has destroyed the ${defendant.ship} ship - ${this.ship} Hull: ${this.hull} - ${defendant.ship} Hull: ${defendant.hull}`);
                    if (defendant.ship === 'Alien') {
                        alienShips--;
                        document.getElementById('alien-img').setAttribute('src', 'imgs/explosion.png');
                        console.log(`The ${defendant.ship} ship has been destroyed! Would you like to Continue or Retreat?`);
                        messageEl.innerHTML += `The ${defendant.ship} ship has been destroyed! Would you like to Continue or Retreat?\r\n\n`;
                        messageEl.innerHTML += `<button onclick='deploy()'>Continue</button> or <button>Retreat</button>\r\n\n`;

                        // // Create a new Button element
                        // let btnEl = document.querySelector('.btn');
                        // let continueBtn = document.createElement('button');
                        // continueBtn.setAttribute('id', 'continue');
                        // continueBtn.innerHTML = 'Continue';
                        // console.log(continueBtn)
                        // btnEl.innerHTML = "";
                        // btnEl.appendChild(continueBtn);
                        // console.log(btnEl);

                        // alien.deploy();
                    } else {
                        humanShips--;
                        // document.getElementById('human-img').setAttribute('src', 'imgs/explosion.png');
                        document.body.style.backgroundImage = "url('imgs/explosion.png')";
                        document.getElementById('.btn').innerHTML = `<button id="reset">Reset</button>`;
                    }
                    
                    

                } else {
                    console.log(`The ${defendant.ship} has endured damage. Hull strength is at ${defendant.hull}`);
                    messageEl.innerHTML += `The ${defendant.ship} has endured damage. Hull strength is at ${defendant.hull}\r\n\n`;
                    if (defendant.ship === 'Alien') {
                        currentShip.setAttribute('src', 'imgs/alien-damage.png');
                    }
                    // this.attack(defendant);
                }
                
            } else {
                console.log(`${this.ship} MISSES the ${defendant.ship}!`);
                messageEl.innerHTML += `${this.ship} Misses the shot!!!\r\n\n`;
                if (defendant.ship === 'Alien') {
                    console.log('where: ' + direction);
                    if (direction === 'left') {
                        currentShip.setAttribute('src', 'imgs/alien-miss-left.png');
                        currentShip.style.transform = 'scale(0.5) translate(-70%, -70%)';
                        direction = 'right';
                    } else {
                        currentShip.setAttribute('src', 'imgs/alien-miss-right.png');
                        currentShip.style.transform = 'scale(0.7) translate(+70%, +70%)';
                        direction = 'left';
                    }
                    console.log('where: ' + direction);
                    if (defendant.hull < 4) {
                        setTimeout(function() {currentShip.setAttribute('src', 'imgs/alien-damage.png')}, 500);
                    } else {
                        setTimeout(function() {currentShip.setAttribute('src', 'imgs/alien-finger.png')}, 500);
                        console.log(`The ${defendant.ship} seems to be taunting us!\r\n\n`);
                        messageEl.innerHTML += `The ${defendant.ship} seems to be taunting us!\r\n\n`;
                    }
                }
            }

            console.log(this.hull + ":" + defendant.hull);

            document.getElementById('human-status-el').textContent = `Ships: ${humanShips} | ${human.ship} Hull: ${human.hull}`;
            document.getElementById('alien-status-el').textContent = `Ships: ${alienShips} | ${alien.ship} Hull: ${alien.hull}`;

    }

    retreat() {
        console.log(`I'm OUTTA HERE!`)
        messageEl.innerHTML += `I'm OUTTA HERE!\r\n\n`;
    }

    deploy() {
        // document.removeChild(continueBtn);
        let currentShip = document.getElementById('alien-img');
        
        if (alienShips > 0) {
            console.log(`The Aliens launches a new ship!`);
            messageEl.innerHTML += `The Aliens launches a new ship!\r\n\n`;
            direction = 'left';

            // find a random number between 6 and 3
            hull = Math.floor(Math.random()*(6-3)+3) + 1;

            // find a random number bewteen 4 and 2
            firepower = Math.floor(Math.random()*(4-2) + 2) + 1;

            // find a random number between .8 and .6
            attack = Math.random()*(.8-.6) + .6;

            alien = new Ship('Alien', hull, firepower, attack);

            // console.log(human);
            console.log(`${human.ship} - Hull: ${human.hull}, Firepower: ${human.firepower}, Acurracy: ${human.accuracy}`);

            // console.log(alien);
            console.log(`${alien.ship} - Hull: ${alien.hull}, Firepower: ${alien.firepower}, Acurracy: ${alien.accuracy}`);

            document.getElementById('human-status-el').textContent = `Ships: ${humanShips} | ${human.ship} Hull: ${human.hull}`;
            document.getElementById('alien-status-el').textContent = `Ships: ${alienShips} | ${alien.ship} Hull: ${alien.hull}`;

            // alienShips--;
            human.attack(alien);
        } else {
            console.log(`GAME OVER! The rest of the aliens are retreating!`);
            messageEl.innerHTML += `GAME OVER! The rest of the aliens are retreating!\r\n\n`;
        }

    }
    
}

// let numShips = prompt('Number of ships to deploy (numbers only)');
// let alienShips = numShips;
// let humanShips = numShips;

let alienShips = 6;
let humanShips = 1;
// let numShips = 6;

let direction = 'left';

// find a random number between 6 and 3
let hull = Math.floor(Math.random()*(6-3)+3) + 1;

// find a random number bewteen 4 and 2
let firepower = Math.floor(Math.random()*(4-2) + 2) + 1;

// find a random number between .8 and .6
let attack = Math.random()*(.8-.6) + .6;

let alien = new Ship('Alien', hull, firepower, attack);

const human = new Ship('USS Assembly', 20, 5, .7);

// console.log(human);
console.log(`${human.ship} - Hull: ${human.hull}, Firepower: ${human.firepower}, Acurracy: ${human.accuracy}`);

// console.log(alien);
console.log(`${alien.ship} - Hull: ${alien.hull}, Firepower: ${alien.firepower}, Acurracy: ${alien.accuracy}`);

document.getElementById('human-status-el').textContent = `Ships: ${humanShips} | ${human.ship} Hull: ${human.hull}`;
document.getElementById('alien-status-el').textContent = `Ships: ${alienShips} | ${alien.ship} Hull: ${alien.hull}`;

// console.log(`${human.ship} initiates a FIRST STRIKE response and launches an attack on the ${alien.ship}`);
console.log(`**** NEWS ALERT *****\nThe humans all around the world are being drained of our natural resources, our RAMEN!\n${human.ship} initiates a FIRST STRIKE response and launches an attack on the ${alien.ship} ship\r\n\n`);

let messageEl = document.getElementById('message-el');
messageEl.innerHTML += `<br>**** NEWS ALERT *****<br><img id='img-console' src='imgs/alien-ramen.png'><br>**** NEWS ALERT *****<br><br>The humans all around the world are being drained of our natural resources, our RAMEN!<br><br>${human.ship} initiates a FIRST STRIKE response and launches an attack on the ${alien.ship} ship\r\n\n`;



// const imgEl = document.createElement('img');

document.addEventListener('click', (e) => {
    switch (e.target.textContent) {
        case 'Attack':
            // console.log("Attack Button")
            // human.deploy(human);
            human.attack(alien);
            if (alienShips > 0 && alien.hull > 0) {
                alien.attack(human);
            }
            break;
        case 'Retreat':
            // console.log("Retreat Button")
            human.retreat();
            break;    
        case 'Reset':
            window.location.reload();
            break;
        case 'Continue':
            alien.deploy();
            break;
    }
});



