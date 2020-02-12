import React from "react";
import ItemContainer from "./../item-container/item-container";
import ButtonItem from "./../items/button-item.js";

import IconAdd from "./../icons/icon-add.js";
import IconEdit from "./../icons/icon-edit.js";
import IconErase from "./../icons/icon-erase.js";

const ActionDD = props => {
  return (
    <ItemContainer {...props}>
      <ButtonItem title="Add" hasIcon={<IconAdd />} />
      <ButtonItem title="Edit" hasIcon={<IconEdit />} />
      <ButtonItem title="Delete" hasIcon={<IconErase />} />
    </ItemContainer>
  );
};

export default ActionDD;
