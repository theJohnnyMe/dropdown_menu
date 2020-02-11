import React from "react";
import "./app.scss";

import ActionDD from "./dropdowns/action-dd.js";
import MobileDD from "./dropdowns/mobile-dd.js";

import NavigationDD from "./dropdowns/navigation-dd.js";

import MixedDD from "./dropdowns/mixed-dd.js";

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <ActionDD />
        <MobileDD />
        <NavigationDD />
        <MixedDD />
      </div>
    );
  }
}
