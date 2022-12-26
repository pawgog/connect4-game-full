import { Link } from 'react-router-dom';
import { staticText } from '../utils/staticText';

const Settings = () => {
  return (
    <>
      <h1>Settings</h1>
      <Link to="/board">{staticText.newGame}</Link>
    </>
  );
};

export default Settings;
