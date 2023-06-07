import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: ${({ fontSize }) => fontSize ? `${fontSize * 0.75}px` : "12px"};
  border: none;
  border-radius: ${({ fontSize }) => fontSize ? `${fontSize * 0.5}px` : "8px"};
  font-family: inherit;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : "inherit"};
  font-weight: 500;
  line-height: inherit; 
  color: inherit;
  background-color: #118054;
  transition: background-color 0.125s linear;

  &:hover {
    cursor: pointer;
    background-color: #0e6b46;
  }
`;

export default function Button({ text, fontSize }) {
  return (
    <StyledButton fontSize={fontSize}>{text}</StyledButton>
  );
}
