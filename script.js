"use strict";

const gameBoard = (function () {
  let board;

  const putX = function (num) {
    if (num < 9 && !board[num]) {
      return (board[num] = "X");
    }
    console.log("Cell Taken");
  };

  const putO = function (num) {
    if (num < 9 && !board[num]) {
      return (board[num] = "O");
    }
    console.log("Cell Taken");
  };

  const play = function () {
    board = new Array(9);
    let playing = true;
    while (playing) {
      let winner;

      if (!winner) {
        let xNumber = Number(prompt("Put X from 0 - 9"));
        putX(xNumber);
        winner = checkWinCondition("X");
      }

      if (!winner) {
        let oNumber = Number(prompt("Put O from 0 - 9"));
        putO(oNumber);
        winner = checkWinCondition("O");
      }

      if (winner) {
        console.log("Yes");
        console.log(`Player ${winner} Won!!`);
        playing = !playing;
      }

      //check closures
    }
  };

  // 012
  // 345
  // 678
  // 036
  // 147
  // 258
  // 048
  // 246

  const checkWinCondition = function (symbol) {
    if (board[0] == symbol && board[1] == symbol && board[2] == symbol) {
      console.log("U Win!!");
      return symbol;
    } else if (board[3] == symbol && board[4] == symbol && board[5] == symbol) {
      console.log("U Win!!");
      return symbol;
    } else if (board[6] == symbol && board[7] == symbol && board[8] == symbol) {
      console.log("U Win!!");
      return symbol;
    } else if (board[0] == symbol && board[3] == symbol && board[6] == symbol) {
      console.log("U Win!!");
      return symbol;
    } else if (board[1] == symbol && board[4] == symbol && board[7] == symbol) {
      console.log("U Win!!");
      return symbol;
    } else if (board[2] == symbol && board[5] == symbol && board[8] == symbol) {
      console.log("U Win!!");
      return symbol;
    } else if (board[0] == symbol && board[4] == symbol && board[8] == symbol) {
      console.log("U Win!!");
      return symbol;
    } else if (board[2] == symbol && board[4] == symbol && board[6] == symbol) {
      console.log("U Win!!");
      return symbol;
    }
  };

  //   const checkWinConditionO = function () {
  //     if (board[0] == "O" && board[1] == "O" && board[2] == "O") {
  //       console.log("U Win!!");
  //       return "O";
  //     } else if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
  //       console.log("U Win!!");
  //       return "O";
  //     } else if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
  //       console.log("U Win!!");
  //       return "O";
  //     } else if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
  //       console.log("U Win!!");
  //       return "O";
  //     } else if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
  //       console.log("U Win!!");
  //       return "O";
  //     } else if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
  //       console.log("U Win!!");
  //       return "O";
  //     } else if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
  //       console.log("U Win!!");
  //       return "O";
  //     } else if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
  //       console.log("U Win!!");
  //       return "O";
  //     }
  //   };

  return { play };
})();
