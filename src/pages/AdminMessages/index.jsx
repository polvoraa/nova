import { useEffect, useState } from "react";
import { apiUrl } from "../../lib/api";
import {
  Page,
  Container,
  Header,
  Title,
  Actions,
  ActionButton,
  EmptyState,
  MessagesGrid,
  MessageCard,
  Meta,
  Name,
  Email,
  InfoRow,
  Label,
  Value,
  MessageText
} from "./styles";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.hash = "/admin/login";
      return;
    }

    async function loadMessages() {
      try {
        const response = await fetch(apiUrl("/api/contacts"), {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 401) {
          localStorage.removeItem("token");
          window.location.hash = "/admin/login";
          return;
        }

        const data = await response.json();
        setMessages(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log("Erro ao carregar mensagens:", error);
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  if (loading) {
    return (
      <Page>
        <Container>
          <Title>Carregando mensagens...</Title>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        <Header>
          <Title>Mensagens de Contato</Title>

          <Actions>
            <ActionButton type="button" onClick={() => (window.location.hash = "/admin/dashboard")}>
              Voltar ao Dashboard
            </ActionButton>
          </Actions>
        </Header>

        {messages.length === 0 ? (
          <EmptyState>Nenhuma mensagem recebida ainda.</EmptyState>
        ) : (
          <MessagesGrid>
            {messages.map((message) => (
              <MessageCard key={message._id}>
                <Meta>
                  <Name>{message.name}</Name>
                  <Email href={`mailto:${message.email}`}>{message.email}</Email>
                </Meta>

                {message.company ? (
                  <InfoRow>
                    <Label>Empresa</Label>
                    <Value>{message.company}</Value>
                  </InfoRow>
                ) : null}

                {message.phone ? (
                  <InfoRow>
                    <Label>Telefone</Label>
                    <Value>{message.phone}</Value>
                  </InfoRow>
                ) : null}

                <InfoRow>
                  <Label>Recebida em</Label>
                  <Value>
                    {new Date(message.createdAt).toLocaleString("pt-BR")}
                  </Value>
                </InfoRow>

                <MessageText>{message.message}</MessageText>
              </MessageCard>
            ))}
          </MessagesGrid>
        )}
      </Container>
    </Page>
  );
}
