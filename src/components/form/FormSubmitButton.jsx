import React from 'react';
import styled from 'styled-components';
import Button from '../global/Button';
import ComponentContainer from '../global/ComponentContainer';

const Wrapper = styled.div`
  width: 160px;
  align-self: flex-end;
`;

export default function FormSubmitButton({ name, text, variant, disabled, isLoading }) {
  return (
    <ComponentContainer>
      <Wrapper>
        <Button
          name={name}
          text={text}
          variant={variant}
          disabled={disabled}
          isLoading={isLoading}
        />
      </Wrapper>
    </ComponentContainer>
  );
}