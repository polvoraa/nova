import { Container, Logo, Right, Nav, Actions } from "./styles";
import logoImg from "../../assets/logo.svg";

export default function Header({ currentRoute = "home" }) {
  const isPortfolio = currentRoute === "portfolio";

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Nova Studio" />
        <span>Nova Studio</span>
      </Logo>

      <Right>
        <Nav>
          {isPortfolio ? (
            <>
              <a href="#/">Inicio</a>
              <a href="#/portfolio">Portfolio</a>
            </>
          ) : (
            <>
              <a href="#services">Servicos</a>
              <a href="#/portfolio">Portfolio</a>
              <a href="#about">Sobre</a>
            </>
          )}
        </Nav>

        <Actions>
          <button>Contato</button>
        </Actions>
      </Right>
    </Container>
  );
}
