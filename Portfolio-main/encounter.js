let countdownInterval = null;
let countdown = 0;
let encounterAreas;
let isInEncounterArea = false;

window.addEventListener('DOMContentLoaded', () => {
    encounterAreas = document.querySelectorAll('.encounterArea');
});

//detekce encounter zóny
setInterval(() => {
  function checkCollision(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}


const adamRect = adamImg.getBoundingClientRect();
const encounterAreas = document.querySelectorAll('.encounterArea');

for (const enc of encounterAreas) {
  if (enc instanceof HTMLElement) {
    const encRect = enc.getBoundingClientRect();

    if (checkCollision(adamRect, encRect)) {

    }
  }
}
}, 100);

//Odpočet encounteru
function startCountdown() {
  if (countdownInterval) return; 

  //nastavení odpočtu
    let minTime = 10;
    let maxTime = 50;
    let encounterTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    let countdown = encounterTime;
    


  countdownInterval = setInterval(() => {
    countdown--;
    console.log(`Další  nepřítel se oběví za: ${countdown}`);

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      console.log("Encounter triggered!");

      handleEncounter();

      // === Trigger your encounter code here ===

      countdown = encounterTime;
      if (isInEncounterArea) {
        startCountdown(); 
      }
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
}

//je pořád v zóně?
let isInZone = false;

function checkEncounterZones() {
    const adamRect = adamImg.getBoundingClientRect();

    isInEncounterArea = false; 

    encounterAreas.forEach(enc => {
        if (enc instanceof HTMLElement) {
            const encRect = enc.getBoundingClientRect();
            if (checkCollision(adamRect, encRect)) {
                isInEncounterArea = true;
            }
        }
    });

    if (isInEncounterArea) {
        startCountdown();
    } else {
        stopCountdown();
    }
}
setInterval(() => {
  checkEncounterZones();
}, 1000);


// <------- encounter logic - encounter spawning ------->
    function generateEnemyNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function handleEncounter() {
    const enemy = generateEnemyNumber(1, 20);

    if (enemy >= 1 && enemy <= 5) {
        console.log("Goblin approaches");



    } else if (enemy >= 6 && enemy <= 10) {
        console.log("Skeleton approaches");




    } else if (enemy >= 11 && enemy <= 15) {
        console.log("Fish approaches");



        
    } else if (enemy >= 16 && enemy <= 19) {
        console.log("Svišť approaches");




    } else if (enemy === 20) {
        console.log("Turek approaches");




    } else {
        console.log("Failure");
    }
}
