import React, { useEffect } from 'react';
import styled from 'styled-components';
import errorIcon from '../../assets/images/toast/error.png';
import successIcon from '../../assets/images/toast/success.png';
import warningIcon from '../../assets/images/toast/warning.png';
import ComponentContainer from './ComponentContainer';

const colors = {
  success: { light: '#1aca85', dark: '#0e6b46' },
  warning: { light: '#c3a578', dark: '#705631' },
  error: { light: '#f18b88', dark: '#b11814' }
}

const ToastWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ variant }) => colors[variant].light};
`;

const ToastContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  background-color: ${({ variant }) => colors[variant].light};
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 16px;
  align-self: center;
`;

const Message = styled.span`
  display: inline-block;
  margin-right: 16px;
  padding: 12px 0;
  font-size: 16px;
  font-family: inherit;
  align-self: center;
  color: ${({ variant }) => colors[variant].dark};
`;

const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0 4px;
    margin: 0px 5px auto auto;
    font-size: 16px;
    font-weight: bold;
    background-color: ${({ variant }) => colors[variant].light};
    color: ${({ variant }) => colors[variant].dark};
    
    &:hover {
      cursor: pointer;
    }
`;

const CountdownBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ variant }) => colors[variant].dark};
  animation: decrease-width 5s linear;

  @keyframes decrease-width {
    from {width: 100%}
    to {width: 0%}
  }
`;

export default function Toast({ status, msg, onClose }) {
  const statusType = status.toString().charAt(0);

  const variants = {
    2: 'success',
    4: 'warning',
    5: 'error'
  }

  const iconSources = {
    2: successIcon,
    4: warningIcon,
    5: errorIcon
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    }
  }, [status]);

  return (
    <ComponentContainer maxWidth={'512px'}>
      <ToastWrapper variant={variants[statusType]}>
        <ToastContainer variant={variants[statusType]}>
          <Icon src={iconSources[statusType]} />
          <Message variant={variants[statusType]}>{msg}</Message>
          {/* 50 characters max */}
          <CloseButton variant={variants[statusType]} onClick={onClose}>&#x2716;</CloseButton>
        </ToastContainer>
        <CountdownBar variant={variants[statusType]} />
      </ToastWrapper>
    </ComponentContainer>
  );
}