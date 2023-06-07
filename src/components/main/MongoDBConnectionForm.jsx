import React from 'react';
import FormBase from '../form/FormBase';
import FormInputField from '../form/FormInputField';
import FormLabel from '../form/FormLabel';
import FormSubmitButton from '../form/FormSubmitButton';

export default function MongoDBConnectionForm() {
  return (
    <FormBase>
      <FormLabel text={'MongoDB Connection'} />
      {/* <Toast /> */}
      <FormInputField name={'URI'} />
      <FormSubmitButton />
    </FormBase>
  );
}