import { Avatar } from '@mui/material';
import { Btn, Text } from './ContactListItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();

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
        <DeleteIcon />
      </Btn>
    </>
  );
};
