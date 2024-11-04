import { Nexios } from "nexios-http";

const nexiousInstance = new Nexios({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default nexiousInstance;