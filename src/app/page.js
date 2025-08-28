import Header from "./components/Header/Header";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";
import SelectedWorks from "./components/SelectedWorks/SelectedWorks";
import Steps from "./components/Steps/Steps";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Head from "./head";

export default function Home() {
  return (
    <>
      <Head
        description={
          "Digital Marketing | Content and performance marketing | Advertisements"
        }
        title={"Home"}
      />

      <Header />
      <Services />
      <About />
      <Steps />
      <SelectedWorks />
      <Clients />
      <Testimonials />
    </>
  );
}
