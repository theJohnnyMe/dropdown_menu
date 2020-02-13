import React from "react";
import "./app.scss";

import Header from "./layout/header.js";
import { HeaderButton } from "./layout/button.js";
import NavigationDD from "./dropdowns/navigation-dd.js";
import MixedDD from "./dropdowns/mixed-dd.js";

class App extends React.PureComponent {
  container = React.createRef();

  state = {
    linksButton: false,
    mixedButtons: false
  };
  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }
  handleClick = event => {
    if (event.target.tagName !== "BUTTON") {
      this.setState({
        linksButton: false,
        mixedButton: false
      });
    }
  };

  linksMenu = () => {
    this.setState({ linksButton: !this.state.linksButton });
  };

  mixedMenu = () => {
    this.setState({ mixedButton: !this.state.mixedButton });
  };

  render() {
    return (
      <div ref={this.container}>
        <Header>
          <HeaderButton type="button" onClick={this.linksMenu}>
            Links menu
          </HeaderButton>
          <HeaderButton type="button" onClick={this.mixedMenu}>
            Mixed menu
          </HeaderButton>
        </Header>
        {this.state.linksButton && <NavigationDD wide left="0" top="40px" />}
        {this.state.mixedButton && <MixedDD wide right="0" top="40px" />}
      </div>
    );
  }
}

export default App;
