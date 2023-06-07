import React from 'react';
import FormBase from '../form/FormBase';
import FormInputField from '../form/FormInputField';
import FormLabel from '../form/FormLabel';
import FormSubmitButton from '../form/FormSubmitButton';

export default function MySQLForm() {
  return (
    <FormBase>
      <FormLabel text={'MySQL Connection'} />
      {/* <Toast /> */}
      <FormInputField name={'User'} />
      <FormInputField name={'Password'} />
      <FormInputField name={'Database'} />
      <FormSubmitButton />
    </FormBase>
  );
}