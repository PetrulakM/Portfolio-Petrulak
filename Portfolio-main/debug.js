let toggle = false;
let Encounter = document.querySelector('.encounterArea');

window.addEventListener('keydown', (event) => {
    keysPressed.add(event.key.toLowerCase());

  if (event.key.toLowerCase() === 'g') {
    const devLayer  = document.querySelector('.dev-layer');
    if (!devLayer) return;

    toggle = !toggle;

    if  (toggle){
        devLayer.style.display = 'block';
        
    }
    else {
        devLayer.style.display = 'none';
    }
  }
});

function teleport(direction) {
  const distance = 300;
  const bigdist = 1200;

  switch (direction) {
    case 'up':
      topPos -= distance;
      break;
    case 'down':
      topPos += distance;
      break;
    case 'left':
      leftPos -= distance;
      break;
    case 'right':
      leftPos += distance;
      break;
    case 'bigup':
      topPos -= bigdist;
      break;
    case 'bigdown':
      topPos += bigdist;
      break;
    case 'bigleft':
      leftPos -= bigdist;
      break;
    case 'bigright':
      leftPos += bigdist;
      break;
  }

  mapMove.style.top = `${topPos}px`;
  mapMove.style.left = `${leftPos}px`;
}
function hitbox() {
  const encounterAreas = document.querySelectorAll('.encounterArea');
  
  encounterAreas.forEach((area) => {
    const currentOpacity = window.getComputedStyle(area).opacity;
    
    if (currentOpacity === '0.5') {
      area.style.opacity = '0';
    } else {
      area.style.opacity = '0.5';
    }
  });
}

function spawn(){
  const adam = document.getElementById('adam');
  adam.style.left = x + 'px';
  adam.style.top = y + 'px';
}