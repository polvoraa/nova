
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import Services from "./components/Services/index";
import FloatingCards from "./components/FloatingCards";
import CTA from "./components/CTA/index";
import { LayoutBackground } from "./styles/LayoutBackground";

export default function App() {
  return (
    <>
      <LayoutBackground>
        <Header />
        <Hero />
        <FloatingCards />
        <Services />
        <CTA />
      </LayoutBackground>
    </>
  );
}
