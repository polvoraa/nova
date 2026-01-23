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





const brandingShots = [
  { src: mockupWave, alt: "Identidade visual com textura e tipografia" },
  { src: logoWave, alt: "Poster com direcao criativa e contraste" },
  { src: logoSymbol, alt: "Mockup de marca em papel" },
  { src: logoBroken, alt: "Aplicacao de identidade em midia impressa" },
  { src: renderHeart, alt: "Aplicacao de identidade em midia impressa" },



];

export default function PortfolioPage() {
  return (
    <Background>
      <StrongOverlay />
              <Header currentRoute="portfolio" />
      <Page>
        <Glow />


        <Hero>
          <Eyebrow>Portfolio</Eyebrow>
          <Title>Projetos que mostram forma, ritmo e resultado.</Title>
          <Subtitle>
            Uma selecao curta com trabalhos recentes em branding, web e audiovisual.
            Cada projeto foi pensado para conectar estetica e estrategia.
          </Subtitle>
        </Hero>

        <BrandingSection>
          <SectionTitle>Branding</SectionTitle>
          <Masonry>
            {brandingShots.map((shot, index) => (
              <Photo key={`${shot.alt}-${index}`}>
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </Photo>
            ))}
          </Masonry>
        </BrandingSection>

        <CTA>
          Quer ver mais estudos ou discutir um novo projeto?
        </CTA>
      </Page>
    </Background>
  );
}
