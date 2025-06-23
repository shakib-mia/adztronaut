import { notFound } from "next/navigation";

export async function getData(item) {
  const url = `http://localhost:3000/api/${item}`;
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();
  if (!res.ok) notFound();
  return data;
}
