import { motion } from "framer-motion";
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
  Masonry,
  Photo,
  CTA
} from "./styles";
import mockupWave from "../../assets/mockupwave1.png";
import logoWave from "../../assets/logowave.png";
import logoSymbol from "../../assets/logosymbol.png";
import logoBroken from "../../assets/logobroken.png";
import renderHeart from "../../assets/renderheart.png";
import renderDev from "../../assets/renderDev.png";






const brandingShots = [
  { src: mockupWave, alt: "Identidade visual com textura e tipografia" },
  { src: logoWave, alt: "Poster com direcao criativa e contraste" },
  { src: logoSymbol, alt: "Mockup de marca em papel" },
  { src: logoBroken, alt: "Aplicacao de identidade em midia impressa" },
  { src: renderHeart, alt: "Aplicacao de identidade em midia impressa" },
  { src: renderDev, alt: "Aplicacao de identidade em midia impressa" },



];

export default function PortfolioPage() {
  return (
    <Background>
      <StrongOverlay />
      <Header currentRoute="portfolio" />
      <Page>
        <Glow />

        <Hero>
          <Eyebrow
            as={motion.span}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Portfolio
          </Eyebrow>
          <Title
            as={motion.h1}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            viewport={{ once: true }}
          >
            Projetos que mostram forma, ritmo e resultado.
          </Title>
          <Subtitle
            as={motion.p}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Uma selecao curta com trabalhos recentes em branding, web e audiovisual.
            Cada projeto foi pensado para conectar estetica e estrategia.
          </Subtitle>
        </Hero>

        <BrandingSection
          as={motion.section}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Branding</SectionTitle>
          <Masonry>
            {brandingShots.map((shot, index) => (
              <Photo
                as={motion.figure}
                key={`${shot.alt}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </Photo>
            ))}
          </Masonry>
        </BrandingSection>

        <CTA
          as={motion.p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Quer ver mais estudos ou discutir um novo projeto?
        </CTA>
      </Page>
    </Background>
  );
}
