import React, { Component } from "react";

import { connect } from "react-redux";
import AuthActions from "../../models/auth";
import { CommonActions } from "../../models";

import "./header.css";

class Header extends Component {
  state = {
    activeMenu: 1,
  };

  render() {
    return (
      <div className="desktopNavbar">

      </div>
    );
  }
}


const mapsStateToProps = (state) => ({
  language: state.common.language,
  version: state.auth.isLoggedIn,
});
export default connect(mapsStateToProps, { ...CommonActions, ...AuthActions })(
  Header
);
