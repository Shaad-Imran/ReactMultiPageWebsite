import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/Frame.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;
