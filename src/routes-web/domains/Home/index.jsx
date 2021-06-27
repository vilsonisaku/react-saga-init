import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./home.css";

class Home extends Component {
  componentDidMount() {
    if (!document.body.classList.contains("respbody"))
      document.body.classList.add("respbody");
  }
  componentWillUnmount() {
    document.body.classList.remove("respbody");
  }
  render() {
    const { banners } = this.props;
    return (
      <div className="home">
        <div className="home--firstRow">
          <div className="home--firstRow__details">

          </div>
          <div className="home--firstRow__img">
          </div>
        </div>
        <div className="home--secondRow">
          <div className="home--secondRow__col">
            <div className="rowsmall">
            </div>
            <div className="rowBig">
            </div>
          </div>
          <div className="home--secondRow__col">
            <div className="rowsmall">
            </div>
            <div className="rowBig">

              <div className="itemsGradient">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
