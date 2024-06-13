import axios from "axios";

export const url = window.location.origin;

export async function getData(item) {
  const { data } = await axios.get(`${url}/${item}.json`);
  return data;
}
