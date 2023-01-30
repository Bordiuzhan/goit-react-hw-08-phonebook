import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin: 12px;
  font-weight: 700;
  color: #242424;
  &.active {
    color: white;
  }
`;
export const Btn = styled(Button)`
  min-width: 130px;
  :hover {
    background: #6f1abd;
  }
`;
