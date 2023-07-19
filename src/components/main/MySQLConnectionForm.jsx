import React, { useEffect, useState } from 'react';
import { connectSQL, disconnectSQL } from '../../constants/api-service';
import FormBase from '../form/FormBase';
import FormInputField from '../form/FormInputField';
import FormLabel from '../form/FormLabel';
import FormSubmitButton from '../form/FormSubmitButton';
import ConnectionInfo from '../global/ConnectionInfo';
import Toast from '../global/Toast';

export default function MySQLConnectionForm({ isConnected, setIsConnected, isConverting }) {
  const [fieldValidities, setFieldValidities] = useState({
    "user": true,
    "database": true
  });

  const [formData, setFormData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [response, setResponse] = useState(null);
  const [submitterName, setSubmitterName] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    if (response) {
      setIsToastVisible(true);

      if (submitterName === 'sql-disconnect') {
        setIsConnected(false);
      }

      if (submitterName === 'sql-connect' && response.status === 200) {
        setIsConnected(true);
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

  async function closeConnection() {
    setIsFetching(true);
    setResponse(await disconnectSQL());
    setIsFetching(false);
  }

  async function submitHandler(e) {
    e.preventDefault();
    let buttonName = e.nativeEvent.submitter.name;

    if (buttonName === 'sql-connect') {
      await establishConnection(e);
    }

    if (buttonName === 'sql-disconnect') {
      await closeConnection();
    }

    setSubmitterName(buttonName);
  }

  return (
    <FormBase onSubmit={(e) => submitHandler(e)}>
      <FormLabel text={'MySQL Connection'} />
      {isToastVisible && (
        <Toast status={response.status} msg={response.message} onClose={() => setIsToastVisible(false)} />
      )}
      {!isConnected && (
        <>
          <FormInputField
            type={'text'}
            name={'User'}
            isValid={fieldValidities.user}
            onChange={(e) => setOneFieldValidity(e.target)}
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
            onChange={(e) => setOneFieldValidity(e.target)}
          />
          <FormSubmitButton
            name={'sql-connect'}
            text={'Connect'}
            variant={'green'}
            disabled={!!isToastVisible || isFetching}
            isLoading={isFetching || isConverting}
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
            disabled={!!isToastVisible || isConverting}
          />
        </>
      )}
    </FormBase>
  );
}