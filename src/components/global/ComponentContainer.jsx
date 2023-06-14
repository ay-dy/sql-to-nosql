import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100px;
  min-width: 320px;
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '384px'};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
`;

export default function ComponentContainer({ maxWidth, alignItems, justifyContent, children }) {
  return (
    <Container
      maxWidth={maxWidth}
      alignItems={alignItems}
      justifyContent={justifyContent}>
      {children}
    </Container>
  );
}