import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import { FaTrashAlt } from 'react-icons/fa';

import {
  List,
  ListItem,
  ContactName,
  ContactNumber,
} from './ContactList.styled';

const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ListItem key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <IconButton
              type="button"
              background="#5218fa"
              aria-label="For delete contact"
              onClick={() => onClick(id)}
            >
              <FaTrashAlt />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
