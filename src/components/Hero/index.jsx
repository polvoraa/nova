import { motion } from "framer-motion";
import {
  Section,
  Overlay,
  Content,
  HeroButton
} from "./styles";

export default function Hero() {
  return (
    <Section>
      <Overlay />
      <Content
        as={motion.div}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1>Criamos midias<br />
          que comunicam.</h1>

        <p>
          Vídeos, imagens e experiências digitais para marcas
          que querem se destacar.
        </p>

        <HeroButton>Nosso Portfólio</HeroButton>
      </Content>
    </Section>
  );
}
