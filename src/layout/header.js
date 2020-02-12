import React from "react";
import styled from "styled-components";

const HeaderComponent = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 9px;
`;

const Header = ({ children }) => {
  return <HeaderComponent>{children}</HeaderComponent>;
};

export default Header;
