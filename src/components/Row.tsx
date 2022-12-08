import Cell from './Cell';

interface IProps {
  row: Array<number>;
  playGame: (cell: number) => void;
}

const Row = ({ row, playGame }: IProps) => {
  return (
    <tr>
      {row.map((cell: number, i: number) => (
        <Cell key={i} value={cell} columnIndex={i} playGame={playGame} />
      ))}
    </tr>
  );
};

export default Row;
