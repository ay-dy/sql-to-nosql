import React from 'react';
import styled from 'styled-components';
import ComponentContainer from '../global/ComponentContainer';

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  align-self: flex-start;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  background-color: #25546d;
  transition: outline 0.15s ease-in;
  
  ::placeholder {
    color: #c0dbe4;
  }

  &:not(:hover):focus, &:hover {
    outline: 2px solid #64a6ca ;
  }

  &:not(:hover) {
    outline: 2px solid #2f6a8a;
  }
`;

const ErrorMsg = styled.span`
  font-size: 14px;
  margin-top: 5px;
  align-self: flex-end;
  color: #e93b36;
`;

export default function FormInputField({ name, isValid }) {
  return (
    <ComponentContainer justifyContent={'flex-start'}>
      <Label>{name}</Label>
      <Input name={name} placeholder={name} />
      {isValid && (
        <ErrorMsg>Required</ErrorMsg>
      )}
      {/* <ErrorMsg>Required</ErrorMsg> */}
    </ComponentContainer>
  );
}