import { ListPhone, Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisiblePhone } from 'redux/filter/srlrctors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import { CircularProgress } from '@mui/material';

export const ContactList = () => {
  const items = useSelector(selectVisiblePhone);

  return (
    <ListPhone>
      {items.map(item => (
        <Item key={item.id}>
          <ContactListItem item={item} />
        </Item>
      ))}
    </ListPhone>
  );
};
