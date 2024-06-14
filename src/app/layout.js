import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arik",
  description: "Web Designer & Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
