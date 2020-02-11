import React from "react";
import BaseItem from "./base-item.js";
import IconChevronRight from "./../icons/icon-chevron-right.js";

const LinkItem = ({
  hasIcon,
  title,
  dividerBottom = false,
  dividerTop = false,
  href,
  openInNewTab = true
}) => {
  return (
    <BaseItem dividerBottom={dividerBottom} dividerTop={dividerTop}>
      <a href={href} target={openInNewTab ? "_blank" : "_self"}>
        {hasIcon ? hasIcon : <IconChevronRight />}
        <p>{title}</p>
      </a>
    </BaseItem>
  );
};

export default LinkItem;
