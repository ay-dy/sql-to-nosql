import React from 'react';
import styled from 'styled-components';
import DatabaseIcon from '../../assets/images/connection-info/database.png';
import UserIcon from '../../assets/images/connection-info/user.png';
import ComponentContainer from './ComponentContainer';

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #25546d;
  outline: 2px solid #2f6a8a;
  border-radius: 12px;
  padding: 12px 18px;
  margin-bottom: 12px;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 6px 0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;

const TextWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 16px;
`;

export default function ConnectionInfo({ user, database }) {
  return (
    <ComponentContainer alignItems={'flex-start'} maxWidth={'384px'}>
      <InfoContainer>
        <Info>
          <Icon src={UserIcon} />
          <TextWrapper>{user}</TextWrapper>
        </Info>
        {database && (
          <Info>
            <Icon src={DatabaseIcon} />
            <TextWrapper>{database}</TextWrapper>
          </Info>
        )}
      </InfoContainer>
    </ComponentContainer>
  );
}