import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 272px;
  height: 54px;
  margin-bottom: 16px;
`;

const Slogan = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #19bb7b;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo src={logo} />
        <Slogan>MySQL to MongoDB made simple.</Slogan>
      </HeaderContainer>
    </HeaderWrapper>
  );
}