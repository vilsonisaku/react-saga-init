
let a = window.location.host;

let endpoint = "http://infosystem.demo/backend/";

if (
  a === "localhost:3000" ||
  a === "localhost:3001"
) {
} else {
  endpoint = `https://${a}`;
}

// const apiUrl = `${endpoint}/backend/api`;

const apiUrl = `${endpoint}`;

window.apiUrl = apiUrl;

const data = {
  endpoint,
  baseUrl: apiUrl,
  headers: {},
};

export default data;

