import React from 'react';
import styled from 'styled-components';

const colors = {
  green: { light: '#118054', dark: '#0e6b46' },
  red: { light: '#B72B2B', dark: '#9a2424' }
}

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
  background-color: ${({ disabled, variant }) => disabled ? colors[variant].dark : colors[variant].light};
  transition: background-color ${({ disabled }) => disabled ? '0s' : '0.1s'} linear;

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    background-color: ${({ variant }) => colors[variant].dark};
  }
`;

export default function Button({ text, name, fontSize, variant, disabled }) {
  return (
    <StyledButton
      type={'submit'}
      name={name}
      fontSize={fontSize}
      variant={variant}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
}
