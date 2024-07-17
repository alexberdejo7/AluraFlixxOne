import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderStyle>
      <ContainerHeader>
        <Link to="/">
          <img src="./logo-alura.png" alt="Logo " />
        </Link>
        <ContainerButtons>
          <Link to="/">
            <ButtonMain>Home</ButtonMain>
          </Link>
          <Link to="/NewVideo">
            <ButtonVideo>Añadir Video</ButtonVideo>
          </Link>
        </ContainerButtons>
        <HamburgerMenu onClick={toggleMobileMenu}>
          ☰
        </HamburgerMenu>
      </ContainerHeader>
      {isMobileMenuOpen && (
        <MobileMenu>
          <Link to="/">
            <ButtonMobile onClick={toggleMobileMenu}>Home</ButtonMobile>
          </Link>
          <Link to="/NewVideo">
            <ButtonMobile onClick={toggleMobileMenu}>Añadir Video</ButtonMobile>
          </Link>
        </MobileMenu>
      )}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  justify-content: center;
  background-color: black;
  border-bottom: 2px solid orange;
  z-index: 1;
  width: 100%;
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  width: 1400px;
  padding: 0 50px;
  img {
    width: 170px;
    filter: invert(75%) sepia(100%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%);
  }
  
  @media (max-width: 660px) {
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  button {
    padding: 10px 20px;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 15px;
    cursor: pointer;
    font-weight: 700;
  }

  @media (max-width: 660px) {
    display: none;
  }
`;

const ButtonMain = styled.button`
  color: white;
  border: 2px solid orange;
  background-color: black;
  &:hover {
    background-color: orange;
    color: white;
  }
`;

const ButtonVideo = styled.button`
  color: white;
  border: 2px solid white;
  background-color: black;
  &:hover {
    background-color: white;
    color: #262626;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: white;

  @media (max-width: 660px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  position: absolute;
  top: 125px;
  width: 100%;
  border-top: 2px solid orange;
`;

const ButtonMobile = styled.button`
  width: 100%;
  padding: 15px 0;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: orange;
    color: white;
  }
`;

export default Header;
