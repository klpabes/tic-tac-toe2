"use strict";

const gameBoard = (function () {
  const playButton = document.querySelector("#play-button");
  const cellCount = 9;
  const gameBoard = document.querySelector(".game-board");
  const playerPlaying = document.querySelector(".player-playing");
  let currentPlayer;
  let playing;

  playerPlaying.textContent = "Press the Play button";

  function handleMove(cell) {
    if (cell.textContent || !playing) return;
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      putSymbol(currentPlayer, cell.dataset.index);
      if (checkWinCondition(currentPlayer)) {
        playing = !playing;
        playerPlaying.textContent = `${currentPlayer} Won!`;
        playButton.textContent = "Play Again?";
        return;
      }
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerPlaying.textContent = `It's ${currentPlayer}'s turn`;
  }

  function displayCells() {
    // gameBoard.innerHTML = "";
    currentPlayer = "X";
    playerPlaying.textContent = `It's ${currentPlayer}'s turn`;
    for (let i = 0; i < cellCount; i++) {
      let cell = document.querySelector(`#c${i}`);
      // cell.setAttribute("class", "cell-grid");
      cell.setAttribute("data-index", `${i}`);
      cell.textContent = "";
      // console.log(cell.textContent);
      // gameBoard.appendChild(cell);
    }

    const cells = document.querySelectorAll(".cell-grid");

    cells.forEach((cell) => {
      cell.addEventListener("click", function (e) {
        handleMove(cell);
      });
    });
  }

  let board;

  const putSymbol = function (symbol, num) {
    board[num] = symbol;
  };

  const play = function () {
    playing = true;
    board = new Array(9);
    displayCells();
    playButton.textContent = "Reset";
  };

  playButton.addEventListener("click", () => play());

  const checkWinCondition = function (symbol) {
    if (board[0] == symbol && board[1] == symbol && board[2] == symbol)
      return symbol;
    else if (board[3] == symbol && board[4] == symbol && board[5] == symbol)
      return symbol;
    else if (board[6] == symbol && board[7] == symbol && board[8] == symbol)
      return symbol;
    else if (board[0] == symbol && board[3] == symbol && board[6] == symbol)
      return symbol;
    else if (board[1] == symbol && board[4] == symbol && board[7] == symbol)
      return symbol;
    else if (board[2] == symbol && board[5] == symbol && board[8] == symbol)
      return symbol;
    else if (board[0] == symbol && board[4] == symbol && board[8] == symbol)
      return symbol;
    else if (board[2] == symbol && board[4] == symbol && board[6] == symbol)
      return symbol;
  };
  return { play };
})();

// gameBoard.play();
