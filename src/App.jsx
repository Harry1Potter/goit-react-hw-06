import { useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, selectContacts } from './redux/contactsSlice';
import { changeFilter, selectFilter } from './redux/filtersSlice';

function App() {
  const dispatch = useDispatch();
  
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  
  const onAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const deleteContacts = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className='Phonebook'>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContacts} />
    </div>
  );
}

export default App;