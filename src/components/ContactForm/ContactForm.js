import { useEffect, useState } from 'react';
import { Form, Label, Btn, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact, fetchPhones } from 'redux/contacts/operations';
import { Notify } from 'notiflix';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value.trim());
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    for (let contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        return Notify.failure(`${name} is alredy in contacts`);
      }
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
      Notify.success(`${name} is added`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Input
          color="secondary"
          size="small"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <Input
          color="secondary"
          size="small"
          id="outlined-basic"
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Btn
        variant="contained"
        size="small"
        type="submit"
        disabled={!name || !number}
      >
        Add contact
      </Btn>
    </Form>
  );
};
