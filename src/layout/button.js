import styled from "styled-components";

const Button = styled.button`
  font-size: 20px;
  padding: 6px 9px;
  outline: none;
  color: white;
  background-color: #5dade2;
  border: none;
  border-radius: 3px;
`;

const HeaderButton = styled(Button)`
  color: #5dade2;
  background: transparent;
  border: 1px solid gray;
`;

export { Button, HeaderButton };
