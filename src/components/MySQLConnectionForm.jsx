import React from 'react';
import Form from './Form/Form';
import FormButton from './Form/FormButton';
import FormButtonContainer from './Form/FormButtonContainer';
import FormField from './Form/FormField';
import FormFieldContainer from './Form/FormFieldContainer';
import FormTitle from './Form/FormTitle';

export default function MySQLForm() {
  return (
    <Form>
      <FormTitle text={'MySQL Connection'} />
      <FormFieldContainer>
        <FormField name={'User'} />
        <FormField name={'Password'} />
        <FormField name={'Database'} />
      </FormFieldContainer>
      <FormButtonContainer>
        <FormButton text={'Connect'} />
      </FormButtonContainer>
    </Form>
  );
}