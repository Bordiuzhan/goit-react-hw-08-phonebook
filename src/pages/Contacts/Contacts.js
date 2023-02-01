import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading ? <Loader color="success" /> : <ContactList />}
    </>
  );
}
