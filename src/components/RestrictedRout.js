import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = selectIsLoggedIn;
  //   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  return Component;
};
