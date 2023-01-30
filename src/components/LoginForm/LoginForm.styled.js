import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const Form = styled.form`
  margin: auto;
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled(TextField)`
  color: blueviolet;
`;

export const Btn = styled(Button)`
  min-width: 130px;
  display: block;
  margin: auto;
  color: white;
  background: blueviolet;
  :hover {
    background: #6f1abd;
  }
`;
