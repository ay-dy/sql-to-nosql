import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 320px;
  height: 46px;
  padding: 14px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: #25546d;
  
  ::placeholder {
    color: #c0dbe4;
  }

  &:focus {
    outline: 2px solid #16a16a;
    transition: outline 0.1s ease-in-out
  }

  &:hover {
    box-shadow: 0 0 0 2px rgba(22,161,106, 1);
    transition: box-shadow 0.1s ease-in-out;
  }

  &:not(:hover) {
    box-shadow: 0 0 0 2px rgba(22,161,106,0);
    transition: box-shadow 0.1s ease-in-out;
  }
`;

const ErrorMsg = styled.span`
  font-size: 14px;
  margin-top: 6px;
  align-self: flex-end;
  color: #e93b36;
`;

export default function FormField({ name }) {
  return (
    <Container>
      <Label>{name}</Label>
      <Input name={name} placeholder={name} />
      <ErrorMsg>Required</ErrorMsg>
    </Container>
  );
}