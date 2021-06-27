import Echo from "laravel-echo";
import { connect } from "react-redux";
import AuthActions from "../models/auth";
import api from "../config/api";

let laravelDb = "infosystem.loc";

let a = window.location.host;

if (
  a === "localhost:3000" ||
  a === "localhost:3001" ||
  a === "192.168.0.128:3001" ||
  a === "192.168.0.128:3000"
) {
} else {
  laravelDb = `skin_${a}`;
}

const eventHandler = (data, props) => {
  if (data.PrematchNavbar) {
    //comes all navbar
    props.updateNavBar(data.PrematchNavbar);
  }

};


export const configureSocket = (props) => {
  window.io = require("socket.io-client");
  window["echo"] = new Echo({
    broadcaster: "socket.io",
    host: api.endpoint,
    path: "/backend/socket/socket.io",
    transports: ["websocket", "polling", "flashsocket"],
  });

  window["echo"]
    .channel(`${laravelDb}_chat`)
    .listen(".events", (e) => eventHandler(e.data, props));
};


export default connect(null, {
  ...AuthActions,
})("");
