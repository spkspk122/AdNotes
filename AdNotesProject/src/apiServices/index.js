import axios from "axios";

const SERVER_API = "  ";

const result = dqutill.getDqUtilData();
const TOKEN = result.access;

const APIKit = axios.create({
  baseURL: SERVER_API,
  timeout: 10000,
 
});

const responseHandler = (response) => {
  if (response.status === 401) {
    return Promise.reject(error);
  }

  return response;
};

const errorHandler = (error) => {
  if (error.toJSON().message === "Network Error") {
  } else if (error.toJSON().message === "Request failed with status code 401") {
   
  }
  return Promise.reject(error);
};

APIKit.interceptors.request.use(function (config) {
  const result = dqutill.getDqUtilData();

  config.headers["Authorization"] = "Bearer" + " " + result.access;
  return config;
});
APIKit.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default APIKit;
