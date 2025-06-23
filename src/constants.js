import { notFound } from "next/navigation";

export async function getData(item) {
  const url = `https://adztronaut.com/${item}.json`;
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();
  if (!res.ok) notFound();
  return data;
}
