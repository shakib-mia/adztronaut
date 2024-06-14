import axios from "axios";

let url = "";
if (typeof window !== "undefined") {
  url = window.location.origin;
}

export { url };

export async function getData(item) {
  const { data } = await axios.get(`${url}/${item}.json`);
  // console.log(url);
  return data;
}
