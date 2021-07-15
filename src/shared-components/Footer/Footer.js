import React, { Component } from "react";
import "./footer.css";
import { connect } from "react-redux";
import { CommonActions } from "../../redux-store/models";
import { withRouter } from "react-router-dom";


class Footer extends Component {
  state = {
    isFooterOpen: false,
  };
  toggFooter = () => {
    this.setState({ isFooterOpen: !this.state.isFooterOpen });
  };
  openLinkF = (link) => {
    this.props.openLinkFooter(link);
    this.props.history.push(`/terms`);
  };
  render() {
    return (
      <footer className="fixedFooter">
          <div className="desktopFooter--col">
            <div className="logo">
              {/* <img src={images.logo} className="logoFooter" alt="Footer Logo" /> */}
            </div>

          <div className="copyRight">
            <span>
              Copyright © 2021 <b>{window.location.host.split(".")[0]}</b>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

const mapsStateToProps = (state) => ({});

export default withRouter(connect(mapsStateToProps, CommonActions)(Footer));
