import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Btn, Name, UserAvatar, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <UserAvatar>{user.name.charAt()}</UserAvatar>
      <Name>{user.name}</Name>
      <Btn
        variant="outlined"
        type="button"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Btn>
    </Wrapper>
  );
};
