import { staticText } from './staticText';

export const cloneBoard = (board: Array<Array<number>>) =>
  board.map((boardArray: Array<number>) => [...boardArray]);

export const setDiscOnBoard = (
  boardGame: Array<Array<number>>,
  currentPlayer: number,
  cell: number
) => {
  for (let row = 5; row >= 0; row--) {
    if (!boardGame[row][cell]) {
      boardGame[row][cell] = currentPlayer;
      break;
    }
  }
};

const checkVertical = (board: Array<Array<number>>) => {
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c] &&
          board[r][c] === board[r - 2][c] &&
          board[r][c] === board[r - 3][c]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkHorizontal = (board: Array<Array<number>>) => {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r][c + 1] &&
          board[r][c] === board[r][c + 2] &&
          board[r][c] === board[r][c + 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDiagonalRight = (board: Array<Array<number>>) => {
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c + 1] &&
          board[r][c] === board[r - 2][c + 2] &&
          board[r][c] === board[r - 3][c + 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDiagonalLeft = (board: Array<Array<number>>) => {
  for (let r = 3; r < 6; r++) {
    for (let c = 3; c < 7; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c - 1] &&
          board[r][c] === board[r - 2][c - 2] &&
          board[r][c] === board[r - 3][c - 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDraw = (board: Array<Array<number>>) => {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c] === 0) {
        return 0;
      }
    }
  }
  return 'draw';
};

export const checkAll = (board: Array<Array<number>>) => {
  return (
    checkVertical(board) ||
    checkDiagonalRight(board) ||
    checkDiagonalLeft(board) ||
    checkHorizontal(board) ||
    checkDraw(board)
  );
};

export const togglePlayer = (
  currentPlayer: number,
  player1: number,
  player2: number
) => {
  return currentPlayer === player1 ? player2 : player1;
};

export const checkGameResult = (
  currentPlayer: number,
  result: string | number
) => {
  const player1 = 1;
  const player2 = 2;

  switch (result) {
    case player1:
      return {
        winner: 1,
        gameOver: true,
        message: staticText.player1,
      };
    case player2:
      return {
        winner: 2,
        gameOver: true,
        message: staticText.player2,
      };
    case 'draw':
      return {
        gameOver: true,
        message: staticText.draw,
      };
    default:
      return {
        gameOver: false,
        currentPlayer: togglePlayer(currentPlayer, player1, player2),
      };
  }
};
