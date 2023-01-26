import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPhones, addContact, deleteContact } from './operations';

const extraAction = [fetchPhones, addContact, deleteContact];
const getAction = type => isAnyOf(...extraAction.map(action => action[type]));

const fetchPhonesReducer = (state, action) => {
  state.contacts = action.payload;
};
const addContactReducer = (state, action) => {
  state.contacts.push(action.payload);
};
const deleteContactReducer = (state, action) => {
  const index = state.contacts.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.splice(index, 1);
};
const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const phoneInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchPhones.fulfilled, fetchPhonesReducer)
      .addCase(addContact.fulfilled, addContactReducer)
      .addCase(deleteContact.fulfilled, deleteContactReducer)
      .addMatcher(getAction('pending'), anyPendingReducer)
      .addMatcher(getAction('rejected'), anyRejectedReducer)
      .addMatcher(getAction('fulfilled'), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
