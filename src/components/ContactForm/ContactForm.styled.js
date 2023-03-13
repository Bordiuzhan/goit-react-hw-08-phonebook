import { Button, CircularProgress, TextField } from '@mui/material';
import styled from '@emotion/styled';

export const Form = styled.form`
  border: 1px solid #2a363b;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 450px;
  margin: auto;
  padding: 20px 0;
`;
export const Label = styled.label`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
`;
export const Input = styled(TextField)`
  color: blueviolet;
`;
export const Btn = styled(Button)`
  min-width: 165px;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  background: blueviolet;
  :hover {
    background: #6f1abd;
  }
`;
export const AddedProgress = styled(CircularProgress)`
  width: 20px;
  height: 20px;
`;
