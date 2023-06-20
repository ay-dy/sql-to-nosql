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
  const [uriValidity, setUriValidity] = useState(true);
  const [user, setUser] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [response, setResponse] = useState(null);
  const [submitterName, setSubmitterName] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (response) {
      setIsToastVisible(true);

      if (submitterName === 'mongodb-disconnect') {
        setIsConnected(false);
      }

      if (submitterName === 'mongodb-connect' && response.status === 200) {
        setIsConnected(true);
        setUri('');
      }
    }
  }, [response]);

  function censorPassword() {
    const end = uri.indexOf('@');
    const start = uri.lastIndexOf(':', end) + 1;

    if (start !== -1 && end !== -1) {
      return uri.substring(0, start) + '*****' + uri.substring(end + 1);
    } else {
      return uri;
    }
  }

  function getUser() {
    const start = uri.indexOf('://') + 3;
    const end = uri.indexOf(':', start);
    return uri.substring(start, end);;
  }

  async function establishConnection() {
    if (uri) {
      setIsFetching(true);
      setResponse(await connectMongoDB({ uri: uri }));
      setIsFetching(false);
    }
  }

  async function closeConnection() {
    setIsFetching(true);
    setResponse(await disconnectMongoDB());
    setIsFetching(false);
  }

  function focusHandler() {
    setIsFocused(true);
  }

  function blurHandler() {
    setIsFocused(false);
    setUriValidity(!!uri);
    setUser(getUser());
  }

  async function submitHandler(e) {
    e.preventDefault();
    let buttonName = e.nativeEvent.submitter.name;

    if (buttonName === 'mongodb-connect') {
      await establishConnection();
    }

    if (buttonName === 'mongodb-disconnect') {
      await closeConnection();
    }

    setSubmitterName(buttonName);
  }

  const renderedValue = isFocused ? uri : uri && censorPassword(uri);

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
            value={renderedValue}
            isValid={uriValidity}
            onFocus={focusHandler}
            onBlur={(e) => blurHandler(e.target.value)}
            onChange={(e) => setUri(e.target.value)}
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
          <ConnectionInfo user={user} />
          <FormSubmitButton
            name={'mongodb-disconnect'}
            text={'Disconnect'}
            variant={'red'}
            disabled={!!isToastVisible}
          />
        </>
      )}
      {isFetching && (
        <LoadingOverlay />
      )}
    </FormBase>
  );
}