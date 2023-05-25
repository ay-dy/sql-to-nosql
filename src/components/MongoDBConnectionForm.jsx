import React from 'react';
import Form from './Form/Form';
import FormButton from './Form/FormButton';
import FormButtonContainer from './Form/FormButtonContainer';
import FormField from './Form/FormField';
import FormFieldContainer from './Form/FormFieldContainer';
import FormTitle from './Form/FormTitle';

export default function MongoDBConnectionForm() {
  return (
    <Form>
      <FormTitle text={'MongoDB Connection'} />
      <FormFieldContainer>
        <FormField name={'URI'} />
      </FormFieldContainer>
      <FormButtonContainer>
        <FormButton text={'Connect'} />
      </FormButtonContainer>
    </Form>
  );
}