import axios from "axios";

export const getProfileBySession = async () => {
  const res = await axios.get("/api/restricted/getProfileBySession");
  console.log("res", res);
  return res;
};

export const getProfilePageBySession = async () => {
  const res = await axios.get("/api/restricted/getProfilePageBySession");
  console.log("res", res);
  return res;
};

export const getProfileByAddress = async (address: string) => {
  const res = await axios.get(`/api/push/getProfile?address=${address}`);
  console.log("res", res);
  return;
};
