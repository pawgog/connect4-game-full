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

const discNumberToWin = 4;
const rowNumber = 6;
const colNumber = 7;

const checkValidCondition = (
  board: Array<Array<number>>,
  r: number,
  c: number,
  i: number,
  validation: string
) => {
  switch (validation) {
    case 'vertical':
      return board[r][c] === board[r - i][c];
    case 'horizontal':
      return board[r][c] === board[r][c + i];
    case 'diagonalRight':
      return board[r][c] === board[r - i][c + i];
    case 'diagonalLeft':
      return board[r][c] === board[r - i][c - i];
    default:
      return false;
  }
};

const checkDiscOnBoard = (
  board: Array<Array<number>>,
  r: number,
  c: number,
  validation: string
) => {
  let discOnBoardArray: boolean[] = [];
  for (let i = 1; i < discNumberToWin; i++) {
    discOnBoardArray.push(checkValidCondition(board, r, c, i, validation));
  }
  return discOnBoardArray.every((v) => v === true);
};

const checkVertical = (board: Array<Array<number>>) => {
  let checkVerticalResult = 0;
  for (let r = discNumberToWin - 1; r < rowNumber; r++) {
    for (let c = 0; c < colNumber; c++) {
      if (board[r][c]) {
        const checkIfPlayerWin = checkDiscOnBoard(board, r, c, 'vertical');
        if (checkIfPlayerWin) {
          checkVerticalResult = board[r][c];
        }
      }
    }
  }
  return checkVerticalResult;
};

const checkHorizontal = (board: Array<Array<number>>) => {
  let checkHorizontalResult = 0;
  for (let r = 0; r < rowNumber; r++) {
    for (let c = 0; c < discNumberToWin; c++) {
      if (board[r][c]) {
        const checkIfPlayerWin = checkDiscOnBoard(board, r, c, 'horizontal');
        if (checkIfPlayerWin) {
          checkHorizontalResult = board[r][c];
        }
      }
    }
  }
  return checkHorizontalResult;
};

const checkDiagonalRight = (board: Array<Array<number>>) => {
  let checkDiagonalRightResult = 0;
  for (let r = discNumberToWin - 1; r < rowNumber; r++) {
    for (let c = 0; c < discNumberToWin; c++) {
      if (board[r][c]) {
        const checkIfPlayerWin = checkDiscOnBoard(board, r, c, 'diagonalRight');
        if (checkIfPlayerWin) {
          checkDiagonalRightResult = board[r][c];
        }
      }
    }
  }
  return checkDiagonalRightResult;
};

const checkDiagonalLeft = (board: Array<Array<number>>) => {
  let checkDiagonalLeftResult = 0;
  for (let r = discNumberToWin - 1; r < rowNumber; r++) {
    for (let c = discNumberToWin - 1; c < colNumber; c++) {
      if (board[r][c]) {
        const checkIfPlayerWin = checkDiscOnBoard(board, r, c, 'diagonalLeft');
        if (checkIfPlayerWin) {
          checkDiagonalLeftResult = board[r][c];
        }
      }
    }
  }
  return checkDiagonalLeftResult;
};

const checkDraw = (board: Array<Array<number>>) => {
  for (let r = 0; r < rowNumber; r++) {
    for (let c = 0; c < colNumber; c++) {
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
