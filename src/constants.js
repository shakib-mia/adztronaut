export async function getData(item) {
  console.log(item);
  const res = await fetch(
    `https://arik-git-adztronaut-shakibmias-projects.vercel.app/${item}.json`,
  );
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
