let invTog = false;

window.addEventListener('keydown', (event) => {
    keysPressed.add(event.key.toLowerCase());

  if (event.key.toLowerCase() === 'e') {
    const inventory  = document.querySelector('.inventory');
    if (!inventory) return;

    invTog = !invTog;

    if  (invTog){
        inventory.style.display = 'block';
        
    }
    else {
        inventory.style.display = 'none';
    }
  }
});