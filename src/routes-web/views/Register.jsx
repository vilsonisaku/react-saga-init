import React from "react";

import { Header, Footer } from "../../shared-components";
// import { RegisterUser } from "shared-components/Header/components";
import { connect } from "react-redux";

class Register extends React.Component {
  render() {
    return (
      <div id="maintemp" className="wrapper-m register">
        <div className="full-container-m">
          <Header />
          {/* <RegisterUser /> */}
          <Footer />
        </div>
      </div>
    );
  }
}
const mapsStateToProps = state => ({
  screenWidth: state.common.screenWidth
});
export default connect(mapsStateToProps)(Register);
