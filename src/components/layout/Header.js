import React, { useState } from "react";
import styled from "styled-components";
import Container from "../common/container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHeader = styled.header`
  width: 100vw;
  border: 1px solid #000;
  padding: 20px 0;
  margin-bottom: 20px;
`;

const SrtledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 40px;
    color: #000;
  }
`;

const StyledNav = styled.div`
  display: flex;
`;
const StyledNavbar = styled.div`
  padding: 0px 35px;
  color: #808080;
  font-size: 23px;
`;

const NavbarR = styled.div`
  display: flex;
  .search {
    padding: 0 10px;
    border-right: 1px solid #000;
    display: flex;
  }
  .search input[type="text"] {
    margin-right: 5px;
    width: 0px;
    border: none;
    outline: none;
  }
  .search input[type="text"].open {
    padding: 3px 10px 3px 10px;
    width: 100px;
    border: 1px solid #808080;
  }
  .login {
    padding: 0 8px;
    border-right: 1px solid #000;
    color: #000;
  }
  .cart {
    padding: 0 10px;
    color: #000;
  }
`;

const Header = () => {
  const [searchStart, setSearchStart] = React.useState(false);

  return (
    <StyledHeader>
      <Container>
        <SrtledHeaderContainer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>LOGO</h1>
          </Link>
          <StyledNav>
            <Link to="/MenPage" style={{ textDecoration: "none" }}>
              <StyledNavbar>Men</StyledNavbar>
            </Link>
            <Link to="/WomenPage" style={{ textDecoration: "none" }}>
              <StyledNavbar>Women</StyledNavbar>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <StyledNavbar>Sports</StyledNavbar>
            </Link>
            <Link to="/ShoesPage" style={{ textDecoration: "none" }}>
              <StyledNavbar>Shoes</StyledNavbar>
            </Link>
          </StyledNav>
          <NavbarR>
            <div className="search">
              <div onClick={() => setSearchStart(!searchStart)}>search</div>
              <input
                className={searchStart ? "open" : ""}
                type="text"
                placeholder="搜尋網站目標"
              />
            </div>
            <div className="login">
              <Link to="/LoginPage" style={{ textDecoration: "none" }}>
                <div className="cart">登入/註冊</div>
              </Link>
            </div>
            <Link to="/CartPage" style={{ textDecoration: "none" }}>
              <div className="cart">cart</div>
            </Link>
          </NavbarR>
        </SrtledHeaderContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
