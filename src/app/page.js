"use client";
import Image from "next/image";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import useLenis from "./hooks/useLenis";
import useAOS from "./hooks/useAos";

export default function Home() {
  useLenis();
  useAOS(); // Initialize AOS

  return (
    <Layout>
      <Header />
    </Layout>
  );
}
