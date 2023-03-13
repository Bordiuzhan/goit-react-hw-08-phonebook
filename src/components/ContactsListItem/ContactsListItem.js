import { Avatar } from '@mui/material';
import { Btn, Text } from './ContactsListItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectOperation } from 'redux/contacts/selectors';
import { CircularProgress } from '@mui/material';

export const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();
  const operation = useSelector(selectOperation);

  const deleteData = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <Avatar />
      <Text>
        {item.name}: {item.number}
      </Text>
      <Btn edge="end" aria-label="delete" onClick={() => deleteData(item.id)}>
        {operation === item.id ? (
          <CircularProgress color="inherit" />
        ) : (
          <DeleteIcon />
        )}
      </Btn>
    </>
  );
};
