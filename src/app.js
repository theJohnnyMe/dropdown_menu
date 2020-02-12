import React from "react";
import "./app.scss";

import Header from "./layout/header.js";
import { HeaderButton } from "./layout/button.js";

//import ActionDD from "./dropdowns/action-dd.js";
//import MobileDD from "./dropdowns/mobile-dd.js";

import NavigationDD from "./dropdowns/navigation-dd.js";

import MixedDD from "./dropdowns/mixed-dd.js";

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header>
          <HeaderButton>Links menu</HeaderButton>
          <HeaderButton>Mixed menu</HeaderButton>
        </Header>

        <NavigationDD wide left="0" top="40px" />
        <MixedDD wide right="0" top="40px" />
      </div>
    );
  }
}

export default App;
