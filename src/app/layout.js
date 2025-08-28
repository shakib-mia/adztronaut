import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout/Layout";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Adztronaut",
//   description:
//     "Digital Marketing | Content and performance marketing | Advertisements",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
