import React from 'react';
import styled from 'styled-components';
import ComponentContainer from '../global/ComponentContainer';

const Title = styled.span`
  margin-top: 12px;
  font-size: 24px;
  font-weight: 500;
  color: inherit;
`;

export default function FormLabel({ text }) {
  return (
    <ComponentContainer>
      <Title>{text}</Title>
    </ComponentContainer>
  );
}