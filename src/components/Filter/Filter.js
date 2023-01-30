import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/srlrctors';
import { setFilterData } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(setFilterData(e.currentTarget.value));
  };
  return (
    <Label>
      <Input
        label="Find contacts by name"
        color="secondary"
        size="small"
        type="text"
        value={filter}
        onChange={changeFilter}
      ></Input>
    </Label>
  );
};
