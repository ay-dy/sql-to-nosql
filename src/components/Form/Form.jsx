import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: #19394a;
`;

export default function Form({ children }) {
  return (
    <Wrapper>{children}</Wrapper>
  );
}