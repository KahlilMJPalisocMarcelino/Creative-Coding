let cols, rows;
let size = 25;
let board = [];
let food, head, dir;
let length = 1;
let score = 0;
let gameOver = false;
let gameWin = false;
let gameStarted = false;
let maxScore;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  cols = width / size;
  rows = height / size;
  maxScore = cols * rows - 1; 

  for (let i = 0; i < cols; i++) {
    board[i] = [];
    for (let j = 0; j < rows; j++) {
      board[i][j] = 0;
    }
  }
  //food and snake starting position
  food = createVector(int(random(0, cols)), int(random(0, rows)));
  head = createVector(int(random(0, cols)), int(random(0, rows)));
  dir = createVector(0, 0);
}

function draw() {
  background(220);

  if (!gameStarted) {
    displayStartScreen();
  } else if (gameOver) {
    displayGameOverScreen();
  } else if (gameWin) {
    displayGameWinScreen();
  } else {
    update();
    displayBoard();
    displayScore();
    board[food.x][food.y] = -1;
  }
}

function update() {
  head.add(dir); //snake move

  //snake eat food
  if (dist(head.x, head.y, food.x, food.y) === 0) {
    length += 1;
    score += 10;
    if (score === maxScore * 10) {
      gameWin = true;
    } else {
      generateFood();
    }
  }

  if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
    gameOver = true; //if snake runs into border, game over
  } else if (board[head.x][head.y] > 1) {
    gameOver = true; //if snake runs into snake, game over
    dir.set(0, 0);
  } else {
    board[head.x][head.y] = 1 + length; //snake grows longer
    removeTail();
  }
}

//game board
function displayBoard() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j] === 0) {
        fill(255);
      } else if (board[i][j] === -1) {
        fill(255, 0, 0);
      } else {
        fill(255, 255, 0);
      }
      rect(i * size, j * size, size, size);
    }
  }
}

//random position of food
function generateFood() {
  while (true) {
    food = createVector(int(random(0, cols)), int(random(0, rows)));
    if (board[food.x][food.y] === 0) {
      break;
    }
  }
}

function removeTail() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j] > 0) {
        board[i][j] -= 1;
      }
    }
  }
}

//for the player to know what is their score
function displayScore() {
  fill(0);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
}

function displayStartScreen() {
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(50);
  text("SNAKE GAME", width / 2, height / 2 - 50);
  textSize(20);
  text("Press any key to start", width / 2, height / 2);
}

function displayGameOverScreen() {
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(50);
  text("GAME OVER", width / 2, height / 2);
  textSize(20);
  text("Score: " + score, width / 2, height / 2 + 50);
}

function displayGameWinScreen() {
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(50);
  text("YOU WIN!", width / 2, height / 2);
  textSize(20);
  text("Score: " + score, width / 2, height / 2 + 50);
}

//to control the snake
function keyPressed() {
  if (!gameStarted) {
    gameStarted = true; //any key press, start game
    return;
  }
 //arrow keys, snake's direction
  if (keyCode === LEFT_ARROW && dir.x === 0) {
    dir = createVector(-1, 0);
  } else if (keyCode === RIGHT_ARROW && dir.x === 0) {
    dir = createVector(1, 0);
  } else if (keyCode === DOWN_ARROW && dir.y === 0) {
    dir = createVector(0, 1);
  } else if (keyCode === UP_ARROW && dir.y === 0) {
    dir = createVector(0, -1);
  }
}
