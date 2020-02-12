import React from "react";
import ItemContainer from "./../item-container/item-container";
import LinkItem from "./../items/link-item.js";

const NavigationDD = props => {
  return (
    <ItemContainer {...props}>
      <LinkItem
        title="Johnny unsplash"
        href="https://unsplash.com/@thejohnnyme"
      />
      <LinkItem title="Mentimeter" href="https://www.mentimeter.com/" />
      <LinkItem title="ComeOn Casino" href="https://www.comeon.com/" />
    </ItemContainer>
  );
};

export default NavigationDD;
