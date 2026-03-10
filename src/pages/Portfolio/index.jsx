import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../../components/Header";

import {
  Background,
  StrongOverlay,
  Page,
  Glow,
  Hero,
  Eyebrow,
  Title,
  Subtitle,
  BrandingSection,
  SectionTitle,
  MasonryGrid,
  Photo,
  LandingPhoto
} from "./styles";

export default function PortfolioPage() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://nova-09wl.onrender.com/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erro ao buscar projetos:", err);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <Background>
        <StrongOverlay />
        <Page>
          <Title>Carregando projetos...</Title>
        </Page>
      </Background>
    );
  }

  const brandingProjects = projects.filter(p => p.category === "branding");
  const landingProjects = projects.filter(p => p.category === "landing");

  return (
    <Background>
      <StrongOverlay />
      <Header currentRoute="portfolio" />

      <Page>
        <Glow />

        <Hero>
          <Eyebrow>Portfolio</Eyebrow>
          <Title>
            Projetos que mostram forma, ritmo e resultado.
          </Title>
          <Subtitle>
            Uma selecao curta com trabalhos recentes em branding, web e audiovisual.
            Cada projeto foi pensado para conectar estetica e estrategia.
          </Subtitle>
        </Hero>

        {/* Branding */}
        <BrandingSection>
          <SectionTitle>Branding</SectionTitle>

          <MasonryGrid>

            {brandingProjects.map((project, index) => (

              <Photo
                as={motion.figure}
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </Photo>

            ))}

          </MasonryGrid>
        </BrandingSection>

        {/* Landing Pages */}
        <BrandingSection>
          <SectionTitle>Landing Pages</SectionTitle>

          <MasonryGrid>

            {landingProjects.map((project, index) => (

              <LandingPhoto
                as={motion.figure}
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                viewport={{ once: true }}
              >

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                )}

              </LandingPhoto>

            ))}

          </MasonryGrid>
        </BrandingSection>

      </Page>
    </Background>
  );
}