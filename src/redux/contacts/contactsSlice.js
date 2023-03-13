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
const deleteContactReducerPending = (state, action) => {
  state.operation = action.meta.arg;
};
const addContactReducerPending = state => {
  state.operation = 'add';
};
const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.operation = null;
};
const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
  state.operation = null;
};

const phoneInitialState = {
  contacts: [],
  operation: null,
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
      .addCase(addContact.pending, addContactReducerPending)
      .addCase(deleteContact.fulfilled, deleteContactReducer)
      .addCase(deleteContact.pending, deleteContactReducerPending)
      .addMatcher(getAction('pending'), anyPendingReducer)
      .addMatcher(getAction('rejected'), anyRejectedReducer)
      .addMatcher(getAction('fulfilled'), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
