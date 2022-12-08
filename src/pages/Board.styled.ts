import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import { colorText } from '../utils/colors';
import { TColorsObject } from '../utils/types';

export const BoardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const ButtonBoardStyle = styled.div`
  width: 720px;
  display: flex;
  justify-content: space-between;
`;

export const MessageBoardStyle = styled.div`
  width: 720px;
  height: 40px;
  text-align: center;
  text-shadow: 1px 1px 8px ${colors.white};
  background-color: ${colors.blue};
`;

export const MessageStyle = styled.span<{ $winner: number }>`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ $winner }) => colorText[$winner as keyof TColorsObject]};
`;
