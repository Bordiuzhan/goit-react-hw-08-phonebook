import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

export const selectFilter = state => state.filter;

export const selectVisiblePhone = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) => {
    const normalizedFilter = filters.toLowerCase();
    if (contacts === []) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
