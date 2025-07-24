export default function Head({ title, description }) {
  return (
    <head>
      <title>{title ? title + " - Adztronaut" : "Adztronaut"}</title>
      <meta name="description" content="Web Designer & Developer" />
      <link rel="icon" href="/adztronaut.svg" />
      <link rel="apple-touch-icon" href="/adztronaut.svg" />
      <meta name="theme-color" content="#000000" />
    </head>
  );
}
