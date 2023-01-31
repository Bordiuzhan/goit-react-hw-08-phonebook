import { Avatar, CircularProgress } from '@mui/material';
import { Btn, Text } from './ContactListItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
        {isLoading ? <CircularProgress color="inherit" /> : <DeleteIcon />}
      </Btn>
    </>
  );
};
