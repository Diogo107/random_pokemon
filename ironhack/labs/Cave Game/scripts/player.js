class Player {
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
  }

  moveUp() {
    this.positionY--;
  }
  moveRight() {
    this.positionX++;
  }
  moveDown() {
    this.positionY++;
  }
  moveLeft() {
    this.positionX--;
  }
}

const player = new Player();

console.log(player);

function drawPlayer() {
  const imageUrl = '.../../images/car.png';
  const carImg = new Image();
  carImg.src = imageUrl;
  context.drawImage(carImg, car.distance, context.canvas.height - 100, 50, 80);
}
