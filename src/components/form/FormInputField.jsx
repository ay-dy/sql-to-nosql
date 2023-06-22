import React from 'react';
import styled from 'styled-components';
import ComponentContainer from '../global/ComponentContainer';

const InputLabel = styled.label`
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
  outline: 2px solid ${({ isValid }) => isValid ? '#2f6a8a' : '#d91e18'};
  transition: outline 0.1s ease-in;
  
  ::placeholder {
    color: #c0dbe4;
  }

  &:focus, &:hover {
    outline: 2px solid ${({ isValid }) => isValid ? '#64a6ca' : '#d91e18'};;
  }
`;

const ErrorMsg = styled.span`
  font-size: 14px;
  margin-top: 5px;
  align-self: flex-end;
  color: #e93b36;
`;

export default function FormInputField({ type, name, isValid, onBlur, ...rest }) {
  return (
    <ComponentContainer justifyContent={'flex-start'}>
      <InputLabel>{name}</InputLabel>
      <Input
        type={type}
        name={name.toLowerCase()}
        placeholder={name === 'Password' ? `${name} (Optional)` : name}
        isValid={isValid}
        onBlur={onBlur}
        {...rest}
      />
      {!isValid && <ErrorMsg>Required</ErrorMsg>}
    </ComponentContainer>
  );
}