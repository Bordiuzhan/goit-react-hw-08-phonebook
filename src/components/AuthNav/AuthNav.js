import { AuthLink, Btn } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      {' '}
      <AuthLink to="/register">
        <Btn variant="outlined" size="small" color="inherit">
          Register
        </Btn>
      </AuthLink>
      <AuthLink to="/login">
        <Btn variant="outlined" size="small" color="inherit">
          Login
        </Btn>
      </AuthLink>
    </div>
  );
};
