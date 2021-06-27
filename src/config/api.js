
let a = window.location.host;

let endpoint = "http://infosystem.loc";

if (
  a === "localhost:3000" ||
  a === "localhost:3001" ||
  a === "192.168.0.128:3001" ||
  a === "192.168.1.14:3001" ||
  a === "192.168.0.128:3000" ||
  a === "192.168.1.14:3000" ||
  a === "192.168.0.105:3000" ||
  a === "192.168.1.3:3000"
) {
} else {
  endpoint = `https://${a}`;
}

// const apiUrl = `${endpoint}/backend/api`;

const apiUrl = `${endpoint}`;

window.apiUrl = apiUrl;

export default {
  endpoint,
  baseUrl: apiUrl,
  headers: {},
};
