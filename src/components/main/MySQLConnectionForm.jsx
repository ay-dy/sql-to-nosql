import React, { useEffect, useState } from 'react';
import { connectSQL, disconnectSQL } from '../../constants/api-service';
import FormBase from '../form/FormBase';
import FormInputField from '../form/FormInputField';
import FormLabel from '../form/FormLabel';
import FormSubmitButton from '../form/FormSubmitButton';
import ConnectionInfo from '../global/ConnectionInfo';
import LoadingOverlay from '../global/LoadingOverlay';
import Toast from '../global/Toast';

export default function MySQLForm() {
  const [fieldValidities, setFieldValidities] = useState({
    "user": true,
    "database": true
  });

  const [formData, setFormData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [response, setResponse] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (response) {
      const msg = response.message;
      const keyWord = msg.substring(msg.lastIndexOf(' ') + 1, msg.length - 1);

      if (keyWord === 'established') {
        setIsConnected(true);
      }

      if (keyWord === 'closed') {
        setIsConnected(false);
      }
    }
  }, [response]);

  function setOneFieldValidity(target) {
    setFieldValidities(currentValidities => ({ ...currentValidities, [target.name]: !!target.value }));
  }

  async function establishConnection(e) {
    const data = Object.fromEntries(new FormData(e.target));

    if (!!data.user && !!data.database) {
      setIsFetching(true);
      setResponse(await connectSQL({ host: '127.0.0.1', ...data }));
      setIsFetching(false);
    }

    setFieldValidities({
      "user": !!data.user,
      "database": !!data.database
    });

    setFormData(data);
  }

  async function closeConnection(e) {
    setIsFetching(true);
    setResponse(await disconnectSQL());
    setIsFetching(false);
  }

  async function submitHandler(e) {
    e.preventDefault();
    const buttonName = e.nativeEvent.submitter.name;

    if (buttonName === 'sql-connect') {
      await establishConnection(e);
    }

    if (buttonName === 'sql-disconnect') {
      await closeConnection(e);
    }
  }

  return (
    <FormBase onSubmit={(e) => submitHandler(e)}>
      <FormLabel text={'MySQL Connection'} />
      {response && (
        <Toast status={response.status} msg={response.message} onClose={() => setResponse(null)} />
      )}
      {!isConnected && (
        <>
          <FormInputField
            type={'text'}
            name={'User'}
            isValid={fieldValidities.user}
            onBlur={(e) => setOneFieldValidity(e.target)}
          />
          <FormInputField
            type={'password'}
            name={'Password'}
            isValid={true}
          />
          <FormInputField
            type={'text'}
            name={'Database'}
            isValid={fieldValidities.database}
            onBlur={(e) => setOneFieldValidity(e.target)}
          />
          <FormSubmitButton
            name={'sql-connect'}
            text={'Connect'}
            variant={'green'}
            disabled={!!response}
          />
        </>
      )}
      {isConnected && (
        <>
          <ConnectionInfo user={formData.user} database={formData.database} />
          <FormSubmitButton
            name={'sql-disconnect'}
            text={'Disconnect'}
            variant={'red'}
            disabled={!!response}
          />
        </>
      )}
      {isFetching && (
        <LoadingOverlay />
      )}
    </FormBase>
  );
}