import styled from "styled-components";

const BaseItem = styled.li`
  background: white;
  margin-top: ${props => (props.dividerTop ? "6px" : "0")};
  border-top: ${props => (props.dividerTop ? "1px solid gray" : "none")};
  margin-bottom: ${props => (props.dividerBottom ? "6px" : "0")};
  border-bottom: ${props => (props.dividerBottom ? "1px solid gray" : "none")};
  color: black;
  font-size: 18px;
  padding: 6px;
  .svg-icon {
    fill: black;
    height: 20px;
    margin-right: 9px;
    width: 20px;
  }
  a,
  button {
    color: inherit;
    border: none;
    outline: none;
    background: transparent;
    display: flex;
    text-decoration: none;
    width: 100%;
  }
  button:disabled {
    color: gray;
    .svg-icon {
      fill: gray;
    }
  }
`;

export default BaseItem;
