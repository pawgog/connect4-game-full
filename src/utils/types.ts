export type TGameObject = {
  player1: number;
  player2: number;
  winner: number;
  currentPlayer: number;
  board: Array<Array<number>>;
  gameOver: boolean;
  message: string;
};

export type TColorsObject = {
  0: string;
  1: string;
  2: string;
};

export type TBoardSize = {
  small: string;
  medium: string;
  large: string;
};

export type TInitialGameDetails = {
  small: TGameObject;
  medium: TGameObject;
  large: TGameObject;
};

export type TBoardSizeObject = {
  discNumberToWin: number;
  rowNumber: number;
  colNumber: number;
};
