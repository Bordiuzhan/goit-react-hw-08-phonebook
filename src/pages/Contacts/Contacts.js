import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export default function Contacts() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
