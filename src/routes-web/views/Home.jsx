import React from "react";
import { Header, Footer } from "../../shared-components";
import HomePage from "../domains/Home";
class Home extends React.Component {
  state = {
    banners: {},
    activation: false,
  };
  componentDidMount() {
    if (window.location.href.includes("activation=true")) {
      this.setState({ activation: true });
      document.body.classList.add("has");
      document
        .getElementsByClassName("loginRegister--form")[0]
        .classList.add("focusLogin");
    }

  }

  render() {
    const { banners } = this.state;

    return (
      <div
        id="maintemp"
        className="wrapper-m homepage">

        <div
          className={
            "full-container-m homeContain "
          }>
          <Header />
            <HomePage banners={banners} />
          <Footer isOpenInit={true} />
        </div>
      </div>
    );
  }
}

export default Home;
