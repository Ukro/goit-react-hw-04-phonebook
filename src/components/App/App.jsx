import { useState } from 'react';

import { nanoid } from 'nanoid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, AppTitle } from './App.styled';
import { useLocalStorage } from 'components/hooks/hooks';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';

export default function App({ title }) {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const [filter, setFilter] = useState('');

  const uniqueName = newName => {
    const normalyzeName = newName.toLocaleLowerCase();
    return contacts.find(
      ({ name }) => name.toLocaleLowerCase() === normalyzeName
    );
  };

  const numberFormatting = number => {
    const array = [...number];
    // for (let i = 3; i < array.length - 1; i += 3) {
    //   array.splice(i, 0, '-');
    // }
    return array.join('');
  };

  const addContact = value => {
    const { name, number } = value;
    const newName = uniqueName(name);
    const formatedNumber = numberFormatting(number);

    if (newName) {
      return toast.error(`Name ${name} is already in contacts!`);
    }

    const contact = {
      id: nanoid(),
      name,
      number: formatedNumber,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);

    toast.success(`${name} was added to contacts!`);
  };

  const deleteContact = async itemId => {
    const item = contacts.find(({ id }) => id === itemId);

    Promise.resolve(
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== itemId)
      )
    ).then(toast.info(`Contact ${item.name} was deleted!`));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  function getVisibleContacts() {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const resetFilter = () => {
    setFilter('');
  };

  return (
    <Container>
      <AppTitle>{title}</AppTitle>
      <Section>
        <ContactForm getSubmitData={addContact} />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter
              value={filter}
              onChange={changeFilter}
              onClick={resetFilter}
            />
            <ContactList
              contacts={getVisibleContacts()}
              onClick={deleteContact}
            />
          </>
        ) : (
          <p>No any contacts!</p>
        )}
      </Section>
      <ToastContainer autoClose={3000} theme={'colored'} />
    </Container>
  );
}
