import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

// Export actions
export const { addContact, deleteContact } = contactsSlice.actions;

// Selector to get contacts from state
export const selectContacts = (state) => state.contacts.items;

// Export the reducer to be added to the store
export const contactsReducer = contactsSlice.reducer;
