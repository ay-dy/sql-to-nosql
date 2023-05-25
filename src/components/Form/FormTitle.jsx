import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 384px;;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 24px;
  color: inherit;
`;

export default function FormTitle({ text }) {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
}