import React from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
  background: white;
  border-radius: 3px;
  box-shadow: 6px 6px 24px -6px rgba(0,0,0,0.75);
  list-style-type: none;
  margin: 18px;
  padding: 3px;
  width: ${props => (props.wide ? "200px" : "100px")};
`;

const ItemContainer = ({ children, wide }) => {
  return <ListWrapper wide={wide}>{children}</ListWrapper>;
};

export default ItemContainer;
