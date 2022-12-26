import { Routes, Route } from 'react-router-dom';
import Settings from './Settings';
import Board from './Board';

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Settings />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
};

export default Home;
