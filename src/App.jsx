
import { useEffect, useState } from "react";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import Services from "./components/Services/index";
import FloatingCards from "./components/FloatingCards";
import CTA from "./components/CTA/index";
import PortfolioPage from "./pages/Portfolio/index";
import { LayoutBackground, Overlay } from "./styles/LayoutBackground";

const getRouteFromHash = (hash) => {
  if (hash.startsWith("#/portfolio")) {
    return "portfolio";
  }

  return "home";
};

export default function App() {
  const [route, setRoute] = useState(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "portfolio") {
    return <PortfolioPage />;
  }

  return (
    <>
      <LayoutBackground>
        <Overlay />
        <Header currentRoute={route} />
        <Hero />
        <FloatingCards />
        <Services />
        <CTA />
      </LayoutBackground>
    </>
  );
}
