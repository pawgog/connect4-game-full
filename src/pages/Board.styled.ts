import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import { colorText } from '../utils/colors';
import { TColorsObject } from '../utils/types';

export const GameInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BoardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const BottomBoard = styled.div`
  display: flex;
  width: 650px;
  background-color: ${colors.blue};
`;

export const ButtonBoardStyle = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
`;

export const MessageBoardStyle = styled.div`
  width: 80%;
  height: 50px;
  text-align: center;
  text-shadow: 1px 1px 8px ${colors.white};
  background-color: ${colors.blue};
`;

export const MessageStyle = styled.span<{ $winner: number }>`
  font-weight: bold;
  font-size: 1.8rem;
  color: ${({ $winner }) => colorText[$winner as keyof TColorsObject]};
`;

export const CurrentPlayer = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: italic;
  & > span {
    position: absolute;
    top: 14px;
    font-size: 14px;
    font-weight: bold;
  }
  & > div {
    transition: background-color 0.5s ease-out;
  }
`;
