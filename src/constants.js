import { notFound } from "next/navigation";

export async function getData(item) {
  const url = `https://adztronaut-server.vercel.app/${item}`;

  const res = await fetch(url);
  if (!res.ok) notFound();

  const data = await res.json();
  return data;
}
