import { Form, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};
