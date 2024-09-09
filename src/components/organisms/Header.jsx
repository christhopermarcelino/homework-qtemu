import React from "react";
import HeaderImage from "../molecules/HeaderImage";
import HeaderTitle from "../molecules/HeaderTitle";
import MeetupDetail from "../molecules/MeetupDetail";
import HeaderButton from "../molecules/HeaderButton";

export default class Header extends React.Component {
  render() {
    return (
      <section className="container-fluid px-4 mt-4">
        <header className="bg-light p-4 mt-3 mx-4">
          <div className="row">
            <div className="col-md-4 col-lg-3 mb-3 mb-md-0 text-center text-md-start px-0">
              <HeaderImage />
            </div>
            <div className="col-md-8 col-lg-9">
              <HeaderTitle />
              <MeetupDetail />
              <HeaderButton />
            </div>
          </div>
        </header>
      </section>
    );
  }
}
