import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://medi-detail-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
