import React, { useState } from 'react';
import FormBase from '../form/FormBase';
import FormInputField from '../form/FormInputField';
import FormLabel from '../form/FormLabel';
import FormSubmitButton from '../form/FormSubmitButton';
// import Toast from '../global/Toast';

export default function MongoDBConnectionForm() {
  const [uriValidity, setUriValidity] = useState(true);

  function submitHandler(e) {
    e.preventDefault();
    const newUriValidity = !!e.target.value;
  }

  return (
    <FormBase onSubmit={(e) => submitHandler(e)}>
      <FormLabel text={'MongoDB Connection'} />
      {/* <Toast /> */}
      <FormInputField
        name={'URI'}
        isValid={uriValidity}
        onBlur={(e) => setUriValidity(!!e.target.value)}
      />
      <FormSubmitButton text={'Connect'} variant={'green'} />
    </FormBase>
  );
}