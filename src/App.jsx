import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Systems from "./components/Systems";
import Disciplines from "./components/Disciplines";
import Footer from "./components/Footer";
import { useLenis } from "./hooks/useLenis";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import "./index.css";

export default function App() {
  const rootRef = useRef(null);

  useLenis();
  useScrollAnimations(rootRef);

  return (
    <main ref={rootRef}>
      <Navbar />
      <Hero />
      <Projects />
      <Systems />
      <Disciplines />
      <Footer />
    </main>
  );
}
