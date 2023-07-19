import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  padding: 12px 24px;
  border: ${({ hideBg }) => hideBg ? 'none' : '2px solid #214a60'};
  border-radius: 16px;
  background-color: ${({ hideBg }) => hideBg ? 'transparent' : '#19394a'};
`;

export default function FormBase({ children, onSubmit, hideBg }) {
  return (
    <Container onSubmit={onSubmit} hideBg={hideBg}>
      {children}
    </Container>
  );
}