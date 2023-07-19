import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Bars36 from '../../assets/svgs/bars_gs_36.svg';
import Bars54 from '../../assets/svgs/bars_gs_54.svg';

const colors = {
  green: { light: '#118054', dark: '#0e6b46' },
  red: { light: '#B72B2B', dark: '#9a2424' }
}

const StyledButton = styled.button`
  width: 100%;
  padding: ${({ isLoading, fontSize }) => isLoading ? "6px" : fontSize ? `${fontSize * 0.75}px` : "12px"};
  border: none;
  border-radius: ${({ fontSize }) => fontSize ? `${fontSize * 0.5}px` : "8px"};
  font-family: inherit;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : "inherit"};
  font-weight: 500;
  line-height: inherit; 
  color: ${({ disabled }) => disabled ? '#ccc' : 'inherit'};
  background-color: ${({ disabled, variant }) => disabled ? colors[variant].dark : colors[variant].light};
  transition: background-color ${({ disabled }) => disabled ? '0s' : '0.1s'} linear;

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    background-color: ${({ variant }) => colors[variant].dark};
  }
`;

export default function Button({ text, name, fontSize, variant, disabled, isLoading }) {
  const svgSrc = fontSize ? Bars54 : Bars36;

  return (
    <StyledButton
      type={'submit'}
      name={name}
      fontSize={fontSize}
      variant={variant}
      disabled={disabled}
      isLoading={isLoading}
    >
      {isLoading ? <ReactSVG src={svgSrc} /> : text}
    </StyledButton>
  );
}
