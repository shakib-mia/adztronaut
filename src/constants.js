import { notFound } from "next/navigation";

export async function getData(item) {
  const url = `http://localhost:5000/${item}`;

  const res = await fetch(url);
  if (!res.ok) notFound();

  const data = await res.json();
  return data;
}
