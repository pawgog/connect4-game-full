import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Settings from './Settings';
import Board from './Board';

const Home = () => {
  const [boardSize, setBoardSize] = useState('medium');

  const handleRadioChange = (e: any) => {
    setBoardSize(e.target.value);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Settings
            boardSize={boardSize}
            handleRadioChangeFn={handleRadioChange}
          />
        }
      />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
};

export default Home;
