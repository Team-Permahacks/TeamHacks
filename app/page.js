import Image from "next/image";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Hero from "./_components/Hero";
import Sign from "./_components/Sign";

export default function Home() {
  return (
   <>
      <Header />
      <Banner />
      <Hero />
      <Sign />
      </>
  );
}
