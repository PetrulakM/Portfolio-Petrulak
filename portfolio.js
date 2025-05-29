
window.addEventListener('keydown', (event) => {
    keysPressed.add(event.key.toLowerCase());

  if (event.key.toLowerCase() === 'h') {
    const devLayer  = document.querySelector('.portfolio');
    const adam  = document.querySelector('.adam1');
    if (!devLayer) return;

    toggle = !toggle;

    if  (toggle){
        devLayer.style.display = 'block';
        adam.style.display = `none`;
        
    }
    else {
        devLayer.style.display = 'none';
        adam.style.display = `block`;
    }
  }
});