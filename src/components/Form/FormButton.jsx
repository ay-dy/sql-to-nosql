import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  color: inherit;
  background-color: #118054;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #0e6b46;
  }
`;

export default function FormButton({ text }) {
  return (
    <Button>{text}</Button>
  );
}
