import axios from "axios";
export const fetchData = async () => {
  const response = await axios.get("/api/hello");
  console.log(response.data);
  return response.data;
};
//
