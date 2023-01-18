document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector("span");
  const startBtn = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0; // first div in our grid
  let appleIndex = 0; // first div in our grid
  let currentSnake = [2, 1, 0]; // the div in our grid being 2 (or the HEAD), and 0 being the end (TAIL, with all 1's being the body from now on)
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  // to start, and restart the game
  function startGame() {
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));
    squares[appleIndex].classList.remove("apple");
    clearInterval(interval);
    score = 0;
    randomApple();
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 500;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    console.log("Snake is at: " + currentSnake);

    interval = setInterval(moves, intervalTime);
  }

  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
      console.log("Apple is : " + appleIndex);
    } while (squares[appleIndex].classList.contains("snake"));
    squares[appleIndex].classList.add("apple");
  }

  function moves() {
    if (
      (currentSnake[0] + width >= width * width && direction === width) || // if snake has hit bottom
      (currentSnake[0] % width === width - 1 && direction === 1) || // if snake has hit right wall
      (currentSnake[0] % width === 0 && direction === -1) || // if snake has hit left wall
      (currentSnake[0] - width < 0 && direction === -width) || // if snake has hit the top
      squares[currentSnake[0] + direction].classList.contains("snake")
    ) {
        const position = currentSnake[0];
        console.log("Snake is at: " + position + " position.");
        alert("Game Over!")
        return clearInterval(interval); // this will clear the interval if any of the above happen
    }

    const tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);

    if(squares[currentSnake[0]].classList.contains('apple')){
        squares[currentSnake[0]].classList.remove('apple');
        squares[tail].classList.add('snake');
        currentSnake.push(tail);
        randomApple();
        score= score+10;
        scoreDisplay.textContent = score;
        clearInterval(interval);
        intervalTime = intervalTime * speed;
        interval = setInterval(moves, intervalTime);
    }

    squares[currentSnake[0]].classList.add("snake");
    
  }

  function control(e) {
    squares[currentIndex].classList.remove("snake");

    if (e.keyCode === 39) {
      direction = 1; // if we press the right arrow on our keyboard, the snake will go right one
    } else if (e.keyCode === 38) {
      direction = -width; // if we press the up arrow, the snake will go back ten divs, appearing to go up
    } else if (e.keyCode === 37) {
      direction = -1; // if we press left, the snake will go left one div
    } else if (e.keyCode === 40) {
      direction = +width; // if we press down, the snake head will instantly appear in the div ten divs from where you are now
    }
  }

  document.addEventListener("keyup", control);

  startBtn.addEventListener("click", startGame);
});
