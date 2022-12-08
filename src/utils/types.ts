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
