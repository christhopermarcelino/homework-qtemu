import React from "react";
import Anchor from "../atoms/Anchor";

export default class NavbarLink extends React.Component {
  render() {
    return (
      <>
        <div className="navbar-nav me-auto">
          <Anchor className="nav-link" href="#" text="Create Meetup" />
          <Anchor className="nav-link" href="#" text="Explore" />
        </div>
        <div className="navbar-nav ms-auto">
          <Anchor className="nav-link" href="#" text="Login" />
        </div>
      </>
    );
  }
}
