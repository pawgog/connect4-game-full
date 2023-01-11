import styled from '@emotion/styled';

const CircleStyle = styled.div<{ $color: string; $size: number }>`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border-radius: 50px;
  background-color: ${({ $color }) => $color};
`;

export default CircleStyle;
