import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Btn, Form, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          label="Username"
          color="secondary"
          size="small"
          type="text"
          name="name"
        />
      </Label>
      <Label>
        <Input
          label="Email"
          color="secondary"
          size="small"
          type="email"
          name="email"
        />
      </Label>
      <Label>
        <Input
          label="Password"
          color="secondary"
          size="small"
          type="password"
          name="password"
        />
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
