import { motion } from "framer-motion";
import {
  Section,
  Content,
  Title,
  Button
} from "./styles";

export default function CTA() {
  return (
    <Section>
      <Content
        as={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <Title>
          Vamos criar algo<br />com impacto visual?
        </Title>

        <Button>
          Entre em contato
        </Button>
      </Content>
    </Section>
  );
}
