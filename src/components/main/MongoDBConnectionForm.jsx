import React, { useEffect, useState } from 'react';
import { connectMongoDB, disconnectMongoDB } from '../../constants/api-service';
import FormBase from '../form/FormBase';
import FormInputField from '../form/FormInputField';
import FormLabel from '../form/FormLabel';
import FormSubmitButton from '../form/FormSubmitButton';
import ConnectionInfo from '../global/ConnectionInfo';
import Toast from '../global/Toast';

export default function MongoDBConnectionForm({ isConnected, setIsConnected, isConverting }) {
  const [uri, setUri] = useState('');
  const [isUriValid, setIsUriValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [response, setResponse] = useState(null);
  const [submitterName, setSubmitterName] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    if (response) {
      setIsToastVisible(true);

      if (submitterName === 'mongodb-connect') {
        if (response.status === 200) {
          setIsConnected(true);
        }
      } else {
        setUri('');
        setIsConnected(false);
      }
    }
  }, [response]);

  function censoredUri() {
    const end = uri.indexOf('@');
    const start = uri.lastIndexOf(':', end) + 1;

    return (start !== -1 && end !== -1)
      ? uri.substring(0, start) + '*****' + uri.substring(end)
      : uri;
  }

  function getUser() {
    const start = uri.indexOf('://') + 3;
    const end = uri.indexOf(':', start);

    return uri.substring(start, end);
  }

  function getDatabase() {
    const start = uri.lastIndexOf('/') + 1;
    const end = uri.lastIndexOf('?');

    return (start > end && end !== -1)
      ? uri.substring(start, end)
      : uri.substring(start);
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (!uri) {
      return;
    }

    const buttonName = e.nativeEvent.submitter.name;
    let fn, arg;

    if (buttonName === 'mongodb-connect') {
      fn = connectMongoDB;
      arg = { uri: uri };
    } else {
      fn = disconnectMongoDB;
    }

    setSubmitterName(buttonName);
    setIsFetching(true);
    setResponse(await fn(arg));
    setIsFetching(false);
  }

  function inputHandler(uri) {
    setUri(uri);
    setIsUriValid(!!uri);
  }

  return (
    <FormBase onSubmit={(e) => submitHandler(e)}>
      <FormLabel text={'MongoDB Connection'} />
      {isToastVisible && (
        <Toast status={response.status} msg={response.message} onClose={() => setIsToastVisible(false)} />
      )}
      {!isConnected && (
        <>
          <FormInputField
            name={'URI'}
            value={isFocused ? uri : censoredUri()}
            isValid={isUriValid}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => inputHandler(e.target.value)}
          />
          <FormSubmitButton
            name={'mongodb-connect'}
            text={'Connect'}
            variant={'green'}
            disabled={!!isToastVisible || isFetching}
            isLoading={isFetching || isConverting}
          />
        </>
      )}
      {isConnected && (
        <>
          <ConnectionInfo user={getUser()} database={getDatabase()} />
          <FormSubmitButton
            name={'mongodb-disconnect'}
            text={'Disconnect'}
            variant={'red'}
            disabled={!!isToastVisible || isConverting}
          />
        </>
      )}
    </FormBase>
  );
}