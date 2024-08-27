import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className={css.ContactList}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={() => handleDeleteContact(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;