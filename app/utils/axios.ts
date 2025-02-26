import axios from "axios";

const fetch = axios.create({
  // baseURL: "https://laravel-ibnu.okifirsy.my.id/api",
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default fetch;
