import axios from "axios";
import envConfig from "@/constant/envConfig";

const { applicationMode, backendBaseUrl } = envConfig;

const API = axios.create({
  baseURL: applicationMode === "development" ? backendBaseUrl :  "/talksy/api/v1" ,
  withCredentials:true
});

export default API;
