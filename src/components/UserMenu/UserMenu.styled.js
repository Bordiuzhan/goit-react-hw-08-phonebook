import styled from '@emotion/styled';
import { Avatar, Button } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Name = styled.p`
  font-weight: 6000;
`;

export const Btn = styled(Button)`
  min-width: 130px;
  margin: 12px;
  color: #2a363b;
  border-color: #2a363b;

  :hover {
    border-color: white;
  }
`;

export const UserAvatar = styled(Avatar)`
  background: #2a363b;
`;
