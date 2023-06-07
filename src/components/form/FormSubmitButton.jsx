import React from 'react';
import styled from 'styled-components';
import Button from '../global/Button';
import ComponentContainer from '../global/ComponentContainer';

const Wrapper = styled.div`
  width: 160px;
  align-self: flex-end;
`;

export default function FormSubmitButton() {
  return (
    <ComponentContainer>
      <Wrapper>
        <Button text={'Connect'} />
      </Wrapper>
    </ComponentContainer>
  );
}