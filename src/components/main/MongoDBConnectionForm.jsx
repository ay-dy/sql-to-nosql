import React, { useEffect, useState } from 'react';
import { connectMongoDB, disconnectMongoDB } from '../../constants/api-service';
import FormBase from '../form/FormBase';
import FormInputField from '../form/FormInputField';
import FormLabel from '../form/FormLabel';
import FormSubmitButton from '../form/FormSubmitButton';
import ConnectionInfo from '../global/ConnectionInfo';
import LoadingOverlay from '../global/LoadingOverlay';
import Toast from '../global/Toast';

export default function MongoDBConnectionForm() {
  const [uri, setUri] = useState('');
  const [isUriValid, setIsUriValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [response, setResponse] = useState(null);
  const [submitterName, setSubmitterName] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (response) {
      setIsToastVisible(true);

      if (submitterName === 'mongodb-connect' && response.status === 200) {
        setIsConnected(true);
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
            disabled={!!isToastVisible}
          />
        </>
      )}
      {isConnected && (
        <>
          <ConnectionInfo user={getUser()} />
          <FormSubmitButton
            name={'mongodb-disconnect'}
            text={'Disconnect'}
            variant={'red'}
            disabled={!!isToastVisible}
          />
        </>
      )}
      {isFetching && <LoadingOverlay />}
    </FormBase>
  );
}