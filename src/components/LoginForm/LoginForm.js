import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Btn, Form, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      Notify.success('Welcome!!!');
      form.reset();
    } catch (error) {
      Notify.failure('Something went wrong!');
    }
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
