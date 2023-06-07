import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  padding: 12px 24px;
  border: 2px solid #214a60;
  border-radius: 16px;
  background-color: #19394a;
`;

export default function FormBase({ children }) {
  return (
    <Container>{children}</Container>
  );
}