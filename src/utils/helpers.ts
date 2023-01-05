import { staticText } from './staticText';
import { TBoardSize, TBoardSizeObject } from './types';

export const cloneBoard = (board: Array<Array<number>>) =>
  board.map((boardArray: Array<number>) => [...boardArray]);

export const setDiscOnBoard = (
  boardGame: Array<Array<number>>,
  currentPlayer: number,
  cell: number,
  rowNumber: number
) => {
  for (let row = rowNumber - 1; row >= 0; row--) {
    if (!boardGame[row][cell]) {
      boardGame[row][cell] = currentPlayer;
      break;
    }
  }
};

export const setBoardSize = (boardSize: string) => {
  const discNumberToWin = {
    small: 3,
    medium: 4,
    large: 5,
  };
  const rowNumber = {
    small: 5,
    medium: 6,
    large: 7,
  };
  const colNumber = {
    small: 6,
    medium: 7,
    large: 8,
  };
  return {
    discNumberToWin: discNumberToWin[boardSize as keyof TBoardSize],
    rowNumber: rowNumber[boardSize as keyof TBoardSize],
    colNumber: colNumber[boardSize as keyof TBoardSize],
  };
};

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
  validation: string,
  discNumberToWin: number
) => {
  let discOnBoardArray: boolean[] = [];
  for (let i = 1; i < discNumberToWin; i++) {
    discOnBoardArray.push(checkValidCondition(board, r, c, i, validation));
  }
  return discOnBoardArray.every((v) => v === true);
};

const checkVertical = (
  board: Array<Array<number>>,
  boardSizeObject: TBoardSizeObject
) => {
  const { discNumberToWin, rowNumber, colNumber } = boardSizeObject;
  let checkVerticalResult = 0;
  for (let r = discNumberToWin - 1; r < rowNumber; r++) {
    for (let c = 0; c < colNumber; c++) {
      if (board[r][c]) {
        const checkIfPlayerWin = checkDiscOnBoard(
          board,
          r,
          c,
          'vertical',
          discNumberToWin
        );
        if (checkIfPlayerWin) {
          checkVerticalResult = board[r][c];
        }
      }
    }
  }
  return checkVerticalResult;
};

const checkHorizontal = (
  board: Array<Array<number>>,
  boardSizeObject: TBoardSizeObject
) => {
  const { discNumberToWin, rowNumber } = boardSizeObject;
  let checkHorizontalResult = 0;
  for (let r = 0; r < rowNumber; r++) {
    for (let c = 0; c < discNumberToWin; c++) {
      if (board[r][c]) {
        const checkIfPlayerWin = checkDiscOnBoard(
          board,
          r,
          c,
          'horizontal',
          discNumberToWin
        );
        if (checkIfPlayerWin) {
          checkHorizontalResult = board[r][c];
        }
      }
    }
  }
  return checkHorizontalResult;
};

const checkDiagonalRight = (
  board: Array<Array<number>>,
  boardSizeObject: TBoardSizeObject
) => {
  const { discNumberToWin, rowNumber } = boardSizeObject;
  let checkDiagonalRightResult = 0;
  for (let r = discNumberToWin - 1; r < rowNumber; r++) {
    for (let c = 0; c < discNumberToWin; c++) {
      if (board[r][c]) {
        const checkIfPlayerWin = checkDiscOnBoard(
          board,
          r,
          c,
          'diagonalRight',
          discNumberToWin
        );
        if (checkIfPlayerWin) {
          checkDiagonalRightResult = board[r][c];
        }
      }
    }
  }
  return checkDiagonalRightResult;
};

const checkDiagonalLeft = (
  board: Array<Array<number>>,
  boardSizeObject: TBoardSizeObject
) => {
  const { discNumberToWin, rowNumber, colNumber } = boardSizeObject;
  let checkDiagonalLeftResult = 0;
  for (let r = discNumberToWin - 1; r < rowNumber; r++) {
    for (let c = discNumberToWin - 1; c < colNumber; c++) {
      if (board[r][c]) {
        const checkIfPlayerWin = checkDiscOnBoard(
          board,
          r,
          c,
          'diagonalLeft',
          discNumberToWin
        );
        if (checkIfPlayerWin) {
          checkDiagonalLeftResult = board[r][c];
        }
      }
    }
  }
  return checkDiagonalLeftResult;
};

const checkDraw = (
  board: Array<Array<number>>,
  boardSizeObject: TBoardSizeObject
) => {
  const { rowNumber, colNumber } = boardSizeObject;
  for (let r = 0; r < rowNumber; r++) {
    for (let c = 0; c < colNumber; c++) {
      if (board[r][c] === 0) {
        return 0;
      }
    }
  }
  return 'draw';
};

export const checkAll = (board: Array<Array<number>>, boardSize: string) => {
  const boardSizeObject = setBoardSize(boardSize);
  return (
    checkVertical(board, boardSizeObject) ||
    checkDiagonalRight(board, boardSizeObject) ||
    checkDiagonalLeft(board, boardSizeObject) ||
    checkHorizontal(board, boardSizeObject) ||
    checkDraw(board, boardSizeObject)
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
