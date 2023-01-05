import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Settings from './Settings';
import Board from './Board';

const Home = () => {
  const [boardSize, setBoardSize] = useState('medium');

  const handleRadioChange = (e: any) => {
    localStorage.removeItem('gameObject');
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
      <Route path="/board" element={<Board boardSize={boardSize} />} />
    </Routes>
  );
};

export default Home;
