import { Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from '@mui/material';
import { staticText } from '../utils/staticText';
import * as S from './Settings.styled';

type IProps = {
  boardSize: string;
  handleRadioChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Settings = ({ boardSize, handleRadioChangeFn }: IProps) => {
  return (
    <S.SettingsStyled>
      <h1>{staticText.gameTitle}</h1>
      <FormControl>
        <FormLabel id="board-radio-buttons-group-label">
          {staticText.boardSize}
        </FormLabel>
        <RadioGroup
          aria-labelledby="board-radio-buttons-group-label"
          value={boardSize}
          onChange={(e) => handleRadioChangeFn(e)}
        >
          <FormControlLabel
            value="small"
            control={<Radio />}
            label={staticText.smallBoard}
          />
          <FormControlLabel
            value="medium"
            control={<Radio />}
            label={staticText.mediumBoard}
          />
          <FormControlLabel
            value="large"
            control={<Radio />}
            label={staticText.largeBoard}
          />
        </RadioGroup>
      </FormControl>
      <Link to="/board">
        <Button variant="outlined" color="info">
          {staticText.newGame}
        </Button>
      </Link>
    </S.SettingsStyled>
  );
};

export default Settings;
