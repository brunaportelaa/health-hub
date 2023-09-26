import api from "./api";

export const metadata = async () => {
  return api
    .get("/metadata")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const listBundles = async () => {
  return api
    .get("/Bundle")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
