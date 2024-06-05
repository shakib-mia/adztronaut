"use client";
// import Image from "next/image";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import useLenis from "./hooks/useLenis";
import useAOS from "./hooks/useAos";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";
import SelectedWorks from "./components/SelectedWorks/SelectedWorks";

export default function Home() {
  useLenis();
  useAOS(); // Initialize AOS

  return (
    <Layout>
      <Header />
      <Clients />
      <Services />
      <SelectedWorks />
    </Layout>
  );
}
