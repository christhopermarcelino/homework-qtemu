import React from "react";
import HeadingOne from "../atoms/HeadingOne";

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <HeadingOne
        text="Hacktiv8 Meetup"
        className="text-center text-md-start"
      />
    );
  }
}
