import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FloatingCards from "./components/FloatingCards";
import CTA from "./components/CTA";

import PortfolioPage from "./pages/Portfolio";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAddProject from "./pages/AdminAddProject";

import { LayoutBackground, Overlay } from "./styles/LayoutBackground";

const getRouteFromHash = (hash) => {

  if (hash.startsWith("#/portfolio")) return "portfolio";

  if (hash.startsWith("#/admin/login")) return "admin-login";

  if (hash.startsWith("#/admin/dashboard")) return "admin-dashboard";

  if (hash.startsWith("#/admin/add")) return "admin-add";

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

  if (route === "portfolio") return <PortfolioPage />;

  if (route === "admin-login") return <AdminLogin />;

  if (route === "admin-dashboard") return <AdminDashboard />;

  if (route === "admin-add") return <AdminAddProject />;

  return (
    <LayoutBackground>
      <Overlay />
      <Header currentRoute={route} />
      <Hero />
      <FloatingCards />
      <Services />
      <CTA />
    </LayoutBackground>
  );
}