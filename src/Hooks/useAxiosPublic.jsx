import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://mediserver.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
