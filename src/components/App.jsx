// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Home } from '../pages/Home/Home';
import { Layout } from './Layout';
import { Register } from 'pages/Register/Register';
import { Contacts } from 'pages/Contacts/Contacts';
import { RestrictedRoute } from './RestrictedRout';
import { PrivateRoute } from './PrivateRoute';
import { Login } from 'pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

export function App() {
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
}
