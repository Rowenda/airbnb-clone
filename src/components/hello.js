import React from "react";

class Hello extends React.Component {
  render() {
    return <div>Hello, {this.props.name} alias {this.props.nickname} !</div>;
  }
}

export default Hello;
