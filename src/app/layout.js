import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout/Layout";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adztronaut",
  description: "Web Designer & Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      {/* <head>
        <link rel="icon" href="/favicon-2.svg" />
        <link rel="apple-touch-icon" href="/favicon-2.svg" />
      </head> */}
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
