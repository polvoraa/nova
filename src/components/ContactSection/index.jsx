import { useState } from "react";
import { motion } from "framer-motion";
import { apiUrl } from "../../lib/api";
import {
  Section,
  Shell,
  Intro,
  Eyebrow,
  Title,
  Copy,
  Details,
  DetailCard,
  FormCard,
  Form,
  FieldGrid,
  Input,
  Textarea,
  SubmitButton,
  StatusMessage
} from "./styles";

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: ""
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(apiUrl("/api/contacts"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not send contact request");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Mensagem enviada. Retornamos em breve."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Erro ao enviar mensagem."
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact">
      <Shell>
        <Intro
          as={motion.div}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Eyebrow>Contato</Eyebrow>
          <Title>Vamos estruturar seu proximo projeto.</Title>
          <Copy>
            Se voce ja tem briefing, prazo ou ideia inicial, manda aqui.
            A mensagem cai na mesma base do projeto, so em uma colecao separada.
          </Copy>

          <Details>
            <DetailCard>
              <strong>Resposta objetiva</strong>
              <span>Briefing, escopo e proximos passos.</span>
            </DetailCard>
            <DetailCard>
              <strong>Mesmo backend</strong>
              <span>Mesma conexao Mongo, rota separada para contatos.</span>
            </DetailCard>
          </Details>
        </Intro>

        <FormCard
          as={motion.div}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Form onSubmit={handleSubmit}>
            <FieldGrid>
              <Input
                name="name"
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={handleChange}
                required
              />
            </FieldGrid>

            <FieldGrid>
              <Input
                name="company"
                placeholder="Empresa ou marca"
                value={form.company}
                onChange={handleChange}
              />
              <Input
                name="phone"
                placeholder="WhatsApp ou telefone"
                value={form.phone}
                onChange={handleChange}
              />
            </FieldGrid>

            <Textarea
              name="message"
              placeholder="Fale sobre a demanda, prazo, referencias e objetivo."
              value={form.message}
              onChange={handleChange}
              required
            />

            {status.message ? (
              <StatusMessage $type={status.type}>{status.message}</StatusMessage>
            ) : null}

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensagem"}
            </SubmitButton>
          </Form>
        </FormCard>
      </Shell>
    </Section>
  );
}
