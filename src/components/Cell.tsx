import { colors } from '../utils/colors';
import CircleStyle from './Circle.styled';
import * as S from './Cell.styled';

interface IProps {
  value: number;
  columnIndex: number;
  playGame: (cell: number) => void;
}

const Cell = ({ value, columnIndex, playGame }: IProps) => {
  let color = colors.white;

  if (value === 1) color = colors.red;
  if (value === 2) color = colors.yellow;

  return (
    <td>
      <S.PaperStyle
        onClick={() => {
          playGame(columnIndex);
        }}
      >
        <CircleStyle $color={color} $size={70} />
      </S.PaperStyle>
    </td>
  );
};

export default Cell;
