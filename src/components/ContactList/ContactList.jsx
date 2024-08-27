// components/ContactList/ContactList.jsx
import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.ContactList}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
