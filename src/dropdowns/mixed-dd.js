import React from "react";
import ItemContainer from "./../item-container/item-container";
import ButtonItem from "./../items/button-item.js";
import LinkItem from "./../items/link-item.js";

import IconAdd from "./../icons/icon-add.js";
import IconEdit from "./../icons/icon-edit.js";
import IconErase from "./../icons/icon-erase.js";
import IconCopy from "./../icons/icon-copy.js";
import IconPlay from "./../icons/icon-play.js";
import IconDownload from "./../icons/icon-download.js";
import IconShare from "./../icons/icon-share.js";
import IconSmarthphone from "./../icons/icon-smarthpone.js";

const MixedDD = () => {
  return (
    <ItemContainer wide>
      <ButtonItem title="Add" hasIcon={<IconAdd />} />
      <ButtonItem title="Edit" hasIcon={<IconEdit />} />
      <ButtonItem title="Delete" hasIcon={<IconErase />} />
      <LinkItem
        title="Johnny unsplash"
        href="https://unsplash.com/@thejohnnyme"
        dividerTop
      />
      <LinkItem title="Mentimeter" href="https://www.mentimeter.com/" />
      <LinkItem
        title="ComeOn Casino"
        href="https://www.comeon.com/"
        dividerBottom
      />
      <ButtonItem title="Play Now" hasIcon={<IconPlay />} />
      <ButtonItem title="Copy url" hasIcon={<IconCopy />} />
      <ButtonItem title="Download song" hasIcon={<IconDownload />} />
      <ButtonItem title="Share it!" hasIcon={<IconShare />} />
      <ButtonItem
        title="Send to phone"
        disabled
        hasIcon={<IconSmarthphone />}
      />
      <ButtonItem title="Add" hasIcon={<IconAdd />} dividerTop />
      <ButtonItem title="Edit" hasIcon={<IconEdit />} />
      <ButtonItem title="Delete" hasIcon={<IconErase />} dividerTop disabled />
    </ItemContainer>
  );
};

export default MixedDD;
