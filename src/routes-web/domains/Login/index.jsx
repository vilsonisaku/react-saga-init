import { subMinutes } from "date-fns/esm";
import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'

import { connect } from "react-redux";

import AuthActions from "../../../redux-store/models/auth";
import "./login.css";

function Test(props) {
    const [count, setCount] = useState(0);
    const state = useSelector( state => state );
    const dispatch = useDispatch();

    function submit(){
        setCount(count + 1)
        
        dispatch(AuthActions.signInByEmail("434","dff"))

        console.log(state);
    }

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => submit()}>
            Click me
          </button>
        </div>
      );
}

class Login extends React.Component {
  state = {
    userName: "",
    password: "",
  };

  handleChangeUsername = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
    this.props.signInByEmail(userName, password);
  };

  render() {
    return (
      <div className="login">
        <div className="title">
          <i className="fal fa-user-circle"></i>
          <div>Login</div>
        </div>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Email addres"
              name="userName"
              onChange={this.handleChangeUsername}
              id="login-name"
            />
          </li>
          <li>
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              onChange={this.handleChangePassword}
            />
          </li>
          <li>
            <button
              type="button"
              onClick={this.handleSubmit}
              className="loginBtn"
            >
              Login
            </button>
          </li>
        </ul>
        <Test />
      </div>
    );
  }
}

const mapsStateToProps = (state) => ({});

export default connect(mapsStateToProps, { ...AuthActions })(Login);
