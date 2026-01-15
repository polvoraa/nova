import { motion } from "framer-motion";
import {
  Section,
  Title,
  Grid,
  Card,
  Icon,
  CardTitle,
  CardText
} from "./styles";

export default function Services() {
  return (
    <Section id="services">
      <Title
        as={motion.h2}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nossos Serviços
      </Title>

      <Grid>
        <Card
          as={motion.div}
          whileHover={{ y: -6 }}
        >
          <Icon>✦</Icon>
          <CardTitle>Direção Criativa</CardTitle>
          <CardText>
            Conceitos visuais, identidade e narrativa para marcas
            que querem se posicionar com clareza.
          </CardText>
        </Card>

        <Card
          as={motion.div}
          whileHover={{ y: -6 }}
        >
          <Icon>◉</Icon>
          <CardTitle>Produção Audiovisual</CardTitle>
          <CardText>
            Criação de vídeos e conteúdos audiovisuais com estética
            cinematográfica e propósito.
          </CardText>
        </Card>

        <Card
          as={motion.div}
          whileHover={{ y: -6 }}
        >
          <Icon>◐</Icon>
          <CardTitle>Web & Experiências Digitais</CardTitle>
          <CardText>
            Design e desenvolvimento de sites e experiências digitais
            que conectam marca e tecnologia.
          </CardText>
        </Card>
      </Grid>
    </Section>
  );
}
