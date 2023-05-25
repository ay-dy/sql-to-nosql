import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
  width: 320px;
`;

export default function FormFieldContainer({ children }) {
  return (
    <Container>{children}</Container>
  );
}