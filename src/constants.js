import axios from "axios";

export const url = "http://localhost:3000";

export async function getData() {
  const { data } = await axios.get(`${url}/blogs.json`);
  //   console.log(data);
  return data;
}
