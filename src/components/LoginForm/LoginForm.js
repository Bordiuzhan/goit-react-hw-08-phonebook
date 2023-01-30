import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Btn, Form, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Input
          label="Email"
          color="secondary"
          size="small"
          type="email"
          name="email"
          variant="outlined"
        />
      </Label>
      <Label>
        <Input
          label="Password"
          color="secondary"
          size="small"
          type="password"
          name="password"
          variant="outlined"
        />
      </Label>
      <Btn type="submit" size="small">
        Log In
      </Btn>
    </Form>
  );
};
