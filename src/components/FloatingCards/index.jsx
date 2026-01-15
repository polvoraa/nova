import { motion } from "framer-motion";
import {
  Section,
  Grid,
  Card
} from "./styles";

export default function FloatingCards() {
  return (
    <Section>
      <Grid>
        <Card
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Direção Criativa
        </Card>

        <Card
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Produção Audiovisual
        </Card>

        <Card
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Experiências Digitais
        </Card>
      </Grid>
    </Section>
  );
}
