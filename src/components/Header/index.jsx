import { Container, Logo, Right, Nav, Actions } from "./styles";
import logoImg from "../../assets/logo.svg"; // ajuste se necessário

export default function Header() {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Nova Studio" />
        <span>Nova Studio</span>
      </Logo>

      <Right>
        <Nav>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#about">Sobre</a>
        </Nav>

        <Actions>
          <button>Contato</button>
        </Actions>
      </Right>
    </Container>
  );
}
