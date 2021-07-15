import React, { Component,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {components} from "../../shared-components";

import { connect } from "react-redux";
import AuthActions from "../../redux-store/models/auth";
import { CommonActions } from "../../redux-store/models";

import "./header.css";

class Header extends Component {
  state = {
    activeMenu: 1,
  };

  render() {

    console.log(components)

    const Login = components['login'];

    return (
      <div className="desktopNavbar">
        <Login />
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

