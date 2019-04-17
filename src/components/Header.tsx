import React from 'react'

import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  color: white;
  background-color: #16638d;
  z-index: 1000;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1001px) {
    background-color: transparent;
  }

  @media (max-width: 1000px) and (min-width: 601px) {
    background-color: transparent;
    font-size: 13px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

const HeaderLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: hotpink;
`

// HEADER NAV

const HeaderNav = styled.div`
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }
`

const HeaderNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,.4);
  }
`

const HeaderUser = styled.div`
  display: flex;
`

const HeaderUserItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: hotpink;
`

export default class Header extends React.Component {
  render(): JSX.Element {
    return (
      <HeaderContainer>
        <HeaderLogo href="/">AETHER STO</HeaderLogo>
        <HeaderNav>
          <HeaderNavItem>PLATFORM</HeaderNavItem>
          <HeaderNavItem>COMPANY</HeaderNavItem>
          <HeaderNavItem>PARTNERSHIP</HeaderNavItem>
          <HeaderNavItem>SUPPORT</HeaderNavItem>
        </HeaderNav>
        <HeaderUser>
          <HeaderUserItem href="/">Login</HeaderUserItem>
          <HeaderUserItem href="/">Register</HeaderUserItem>
        </HeaderUser>
      </HeaderContainer>
    )
  }
}