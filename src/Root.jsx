import React from "react";
import { connect } from "react-redux";

import {
  AuthActions,
  CommonActions,
} from "./models";
// import { configureSocket } from "./services/socket";
import Router from "./navigation";
// import {
//   LoginModal,
//   LoginInfos
// } from "./shared-components";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

class Root extends React.Component {
  componentDidMount() {
    // this.props.getInitialData(); 
    // configureSocket(this.props)
    this.getStoredData();
    window.toggleLoading = this.props.toggleLoading;
    window.startQueueLoader = this.props.startQueueLoader;
    window.endQueueLoader = this.props.endQueueLoader;

    window.addEventListener("resize", this.updateDimensions);

  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn } = this.props;

    if (
      prevProps.isLoggedIn !== isLoggedIn &&
      isLoggedIn === null
    ) {
      sessionStorage.setItem("accountData", null);
    }
  }

  getStoredData = () => {
    // const accountData = sessionStorage.getItem("accountData");

    // const data = JSON.parse(accountData);

  };

  updateDimensions = () => {
    this.props.takeScreenWidth(window.innerWidth);
  };

  render() {
    const {
      screenWidth,
    } = this.props;
    let role = "";


    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows/i.test(userAgent)) {
      this.props.setDevice("windows");
    }
    if (/android/i.test(userAgent)) {
      this.props.setDevice("android");
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      this.props.setDevice("ios");
    }
    // const isMobile = screenWidth < 1025 && this.props.mobileCheck;

    return (
      <div className={`mainDiv`}>
        {/* {isOpenLogin && <LoginModal></LoginModal>} */}
        <Router
          mobileCheck={this.props.mobileCheck}
          screenWidth={screenWidth}
          role={role}
        />
      </div>
    );
  }
}

const mapsStateToProps = (state) => ({
  loginInfos: state.common.loginInfos,
  screenWidth: state.common.screenWidth,
});

export default connect(mapsStateToProps, {
  ...AuthActions,
  ...CommonActions,
})(Root);
