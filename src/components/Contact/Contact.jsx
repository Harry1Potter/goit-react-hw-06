import React from 'react';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete contact
      </button>
    </li>
  );
};

export default Contact;