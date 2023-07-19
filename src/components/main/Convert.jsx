import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { convert } from '../../constants/api-service';
import FormBase from '../form/FormBase';
import Button from '../global/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 320px;
`;

export default function Convert({ isMysqlConnected, isMongodbConnected, isConverting, setIsConverting }) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (response) {
      console.log(response.message);
    }
  }, [response]);

  async function submitHandler(e) {
    e.preventDefault();
    setIsConverting(true);
    setResponse(await convert());
    setIsConverting(false);
  }

  return (
    <>
      <FormBase onSubmit={(e) => submitHandler(e)} hideBg={true}>
        <Wrapper>
          <Container>
            <Button
              text={'Convert'}
              variant={'green'}
              fontSize={24}
              disabled={!isMysqlConnected || !isMongodbConnected || isConverting}
              isLoading={isConverting}
            />
          </Container>
        </Wrapper>
      </FormBase>
    </>
  );
}