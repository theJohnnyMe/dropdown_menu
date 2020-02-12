import React from "react";
import ItemContainer from "./../item-container/item-container";
import ButtonItem from "./../items/button-item.js";

import IconCopy from "./../icons/icon-copy.js";
import IconPlay from "./../icons/icon-play.js";
import IconDownload from "./../icons/icon-download.js";
import IconShare from "./../icons/icon-share.js";
import IconSmarthphone from "./../icons/icon-smarthpone.js";

const MobileDD = props => {
  return (
    <ItemContainer {...props}>
      <ButtonItem title="Play Now" hasIcon={<IconPlay />} />
      <ButtonItem title="Copy url" hasIcon={<IconCopy />} />
      <ButtonItem title="Download song" hasIcon={<IconDownload />} />
      <ButtonItem title="Share it!" hasIcon={<IconShare />} />
      <ButtonItem
        title="Send to phone"
        disabled
        hasIcon={<IconSmarthphone />}
      />
    </ItemContainer>
  );
};

export default MobileDD;
