import React from "react";

export default class Table extends React.Component {
  render() {
    return (
      <table
        className={`table table-responsive table-borderless w-auto ${this.props.className}`}
      >
        {this.props.children}
      </table>
    );
  }
}
