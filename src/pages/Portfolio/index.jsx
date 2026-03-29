import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { apiUrl } from "../../lib/api";
import {
  Background,
  StrongOverlay,
  Page,
  Glow,
  Hero,
  Eyebrow,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  MasonryGrid,
  MediaCard,
  VideoCard,
  PdfCard
} from "./styles";

export default function PortfolioPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl("/api/projects"))
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erro ao buscar itens:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Background>
        <StrongOverlay />
        <Page>
          <Title>Carregando...</Title>
        </Page>
      </Background>
    );
  }

  // Agrupar por categoria
  const grouped = items.reduce((acc, item) => {
    const cat = item.category || "Outros";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

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
            Uma seleção curta com trabalhos recentes em branding, web e audiovisual.
            Cada projeto foi pensado para conectar estética e estratégia.
          </Subtitle>
        </Hero>

        {Object.entries(grouped).map(([category, categoryItems]) => (
          <Section key={category}>
            <SectionTitle>{category}</SectionTitle>
            <MasonryGrid>
              {categoryItems.map((item, index) => {
                if (item.fileType === 'image') {
                  return (
                    <MediaCard
                      as={motion.figure}
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.06 }}
                      viewport={{ once: true }}
                    >
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img src={item.fileUrl} alt={item.title} loading="lazy" />
                        </a>
                      ) : (
                        <img src={item.fileUrl} alt={item.title} loading="lazy" />
                      )}
                    </MediaCard>
                  );
                } else if (item.fileType === 'video') {
                  return (
                    <VideoCard
                      as={motion.figure}
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.06 }}
                      viewport={{ once: true }}
                    >
                      <video controls>
                        <source src={item.fileUrl} type="video/mp4" />
                      </video>
                    </VideoCard>
                  );
                } else if (item.fileType === 'pdf') {
                  return (
                    <PdfCard
                      key={item._id}
                      onClick={() => window.open(item.fileUrl, '_blank')}
                    >
                      <div className="pdf-placeholder">
                        <span className="pdf-icon">📄</span>
                        <h3>{item.title}</h3>
                        {item.description && <p>{item.description}</p>}
                      </div>
                    </PdfCard>
                  );
                }
                return null;
              })}
            </MasonryGrid>
          </Section>
        ))}
      </Page>
    </Background>
  );
}
