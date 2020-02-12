import React from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
  position: absolute;
  top: ${props => (props.top ? props.top : "auto")};
  left: ${props => (props.left ? props.left : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
  background: white;
  border-radius: 3px;
  box-shadow: 6px 6px 24px -6px rgba(0, 0, 0, 0.75);
  list-style-type: none;
  margin: 18px;
  padding: 3px;
  width: ${props => (props.wide ? "200px" : "100px")};
`;

const ItemContainer = ({ children, wide, top, left, bottom, right }) => {
  return (
    <ListWrapper
      wide={wide}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      {children}
    </ListWrapper>
  );
};

export default ItemContainer;
