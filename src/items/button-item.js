import React from "react";
import BaseItem from "./base-item.js";

const ButtonItem = ({
  hasIcon,
  title,
  dividerBottom = false,
  dividerTop = false,
  onClick,
  disabled = false
}) => {
  return (
    <BaseItem dividerBottom={dividerBottom} dividerTop={dividerTop}>
      <button
        onClick={onClick}
        disabled={disabled}
        cursor={disabled ? "not-allowed" : "text"}
      >
        {hasIcon}
        <p>{title}</p>
      </button>
    </BaseItem>
  );
};

export default ButtonItem;
