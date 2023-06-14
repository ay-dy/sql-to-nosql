import React from 'react';
import styled from 'styled-components';
import Button from '../global/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 320px;
`;

export default function ConvertButton() {
  return (
    <Wrapper>
      <Container>
        <Button text={'Convert'} variant={'green'} fontSize={22} />
      </Container>
    </Wrapper>
  );
}