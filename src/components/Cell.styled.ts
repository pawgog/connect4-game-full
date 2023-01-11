import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { colors } from '../utils/colors';

export const PaperStyle = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  background-color: ${colors.blue};
  cursor: pointer;
`;
