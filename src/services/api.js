import axios from "axios";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
};

const api = axios.create({
  baseURL: `https://fiaphealthhub-healthhub.fhir.azurehealthcareapis.com`,
  timeout: 45000,
  headers: defaultHeaders,
});

const apiToken = axios.create({
  baseURL: `https://heathhub-auth.vercel.app/token`,
  timeout: 45000,
});

api.interceptors.request.use(async (config) => {
  const cookie = localStorage.getItem("auth");
  const cookieExp = +localStorage.getItem("auth_e");

  if (cookie && cookieExp && new Date().getTime() / 1000 + 30 - cookieExp < 0) {
    console.log("token válido ainda");
    config.headers.Authorization = `Bearer ${cookie}`;
  } else {
    console.log("token inválido");
    await apiToken.get("").then((r) => {
      localStorage.setItem("auth", r.data.access_token);
      localStorage.setItem("auth_e", r.data.expires_on);

      config.headers.Authorization = `Bearer ${r.data.access_token}`;
    });
  }
  return config;
});

export default api;
