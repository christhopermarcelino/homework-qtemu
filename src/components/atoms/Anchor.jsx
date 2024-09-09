import React from "react";

export default class Anchor extends React.Component {
  render() {
    return (
      <a className={this.props.className} href={this.props.href}>
        {this.props.text}
      </a>
    );
  }
}
