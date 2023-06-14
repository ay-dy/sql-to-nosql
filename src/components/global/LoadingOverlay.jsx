import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Spinner from '../../assets/svgs/wedges.svg';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  background-color: rgba(25,57,74,0.5);
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: calc(50% - 48px);
  left: calc(50% - 48px);
`;

export default function LoadingOverlay({ spinnerVisible }) {
  return (
    <SpinnerWrapper>
      <SpinnerContainer>
        {spinnerVisible && (
          <ReactSVG src={Spinner} />
        )}
      </SpinnerContainer>
    </SpinnerWrapper>
  )
}