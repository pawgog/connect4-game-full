import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Row from '../components/Row';
import usePreviousState from '../hooks/usePreviousState';
import useGetFromLocalStorage from '../hooks/useGetFromLocalStorage';
import {
  checkAll,
  checkGameResult,
  cloneBoard,
  setDiscOnBoard,
} from '../utils/helpers';
import { initialGameDetails } from '../utils/staticValue';
import { staticText } from '../utils/staticText';
import { TGameObject } from '../utils/types';
import * as S from './Board.styled';

const Board = () => {
  const gameBoardState = useGetFromLocalStorage('gameObject');
  const [gameDetails, setGameDetails] = useState<TGameObject>(gameBoardState);
  const previousValue = usePreviousState(gameDetails);
  const { currentPlayer, winner, board, gameOver, message } = gameDetails;

  const playGame = (cell: number) => {
    if (!gameOver) {
      let boardGame = cloneBoard(board);

      setDiscOnBoard(boardGame, currentPlayer, cell);

      let result = checkAll(boardGame);
      const gameResult = checkGameResult(currentPlayer, result);

      setGameDetails((prevState) => ({
        ...prevState,
        ...gameResult,
        board: boardGame,
      }));
    } else {
      setGameDetails((prevState) => ({
        ...prevState,
        winner: 0,
        message: staticText.gameOver,
      }));
    }
  };

  const newGame = () => {
    localStorage.removeItem('gameObject');
    setGameDetails(initialGameDetails);
  };

  const saveGame = () => {
    localStorage.setItem('gameObject', JSON.stringify(gameDetails));
  };

  const undoMove = () => {
    setGameDetails(previousValue);
  };

  return (
    <S.BoardStyle>
      <S.ButtonBoardStyle>
        <Button variant="outlined" color="info" onClick={newGame}>
          {staticText.newGame}
        </Button>
        <Button variant="outlined" color="info" onClick={saveGame}>
          {staticText.saveGame}
        </Button>
        <Button variant="outlined" color="warning" onClick={undoMove}>
          {staticText.undoMove}
        </Button>
        <Link to="/">
          <Button variant="outlined" color="warning">
            {staticText.restartGame}
          </Button>
        </Link>
      </S.ButtonBoardStyle>
      <table>
        <tbody>
          {board.map((row, i) => (
            <Row key={i} row={row} playGame={playGame} />
          ))}
        </tbody>
      </table>
      <S.MessageBoardStyle>
        <S.MessageStyle $winner={winner}>{message}</S.MessageStyle>
      </S.MessageBoardStyle>
    </S.BoardStyle>
  );
};

export default Board;
