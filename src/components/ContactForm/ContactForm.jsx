import React from 'react';

import { Formik, Form, ErrorMessage } from 'formik';

import { FormField, Input, Label } from './ContactForm.styled';

import Button from '../Button';

export const ContactForm = ({ getSubmitData }) => {
  const handleSubmit = (values, { resetForm }) => {
    getSubmitData(values);
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        <Form>
          <FormField>
            <Label htmlFor="name">
              Contact Name
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErrorMessage name="name" component="div" />
            </Label>
          </FormField>

          <FormField>
            <Label htmlFor="number">
              Contact Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Label>
            <ErrorMessage name="number" component="div" />
          </FormField>

          <Button type={'submit'} title={'Add Contact'} />
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
