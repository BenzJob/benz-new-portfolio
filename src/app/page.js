import Image from "next/image";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-300">
        <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
      </div>
    </main>
  );
};