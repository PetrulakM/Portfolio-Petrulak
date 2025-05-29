const mapMove = document.querySelector('.map');
const adamImg = document.querySelector('.adam1');
let topPos = 0;
let leftPos = 0;
const step = 5;
const sprint = 8;
const keysPressed = new Set();

// Initial setup
mapMove.style.top = `${topPos}px`;
mapMove.style.left = `${leftPos}px`;
mapMove.style.position = 'absolute'; // Make sure it can move
mapMove.style.display = 'block'; // Show the map!

window.addEventListener('keyup', (event) => {
  keysPressed.delete(event.key.toLowerCase());
});

// Collision check
function checkCollision(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

// Game loop
function move() {
  const prevTop = topPos;
  const prevLeft = leftPos;

  if (keysPressed.has('s')) topPos -= step;
  if (keysPressed.has('w')) topPos += step;
  if (keysPressed.has('d')) leftPos -= step;
  if (keysPressed.has('a')) leftPos += step;
  //pokud se divite proc jsou v takovem to poradi, puvodne byly wasd. kvuli zmene typu pohybu jsem je ale musel invertovat




  mapMove.style.top = `${topPos}px`;
  mapMove.style.left = `${leftPos}px`;


  //colison check part 2
  const adamRect = adamImg.getBoundingClientRect();
  const obstacles = document.querySelectorAll('.obstacle');

  for (const obstacle of obstacles) {
    if (obstacle instanceof HTMLElement) {
      const obstacleRect = obstacle.getBoundingClientRect();

      if (checkCollision(adamRect, obstacleRect)) {
        // Cancel movement by resetting the map’s position
        topPos = prevTop;
        leftPos = prevLeft;
        mapMove.style.top = `${topPos}px`;
        mapMove.style.left = `${leftPos}px`;

        console.log('Collision detected!');
        break;
      }
    }
  }

  requestAnimationFrame(move);
}

move();
