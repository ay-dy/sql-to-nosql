import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default function FormButtonContainer({ children }) {
  return (
    <Container>{children}</Container>
  );
}