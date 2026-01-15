import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 18px clamp(18px, 6vw, 10%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.15) 100%
  );

  backdrop-filter: blur(6px);

  @media (max-width: 860px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 6%;
    text-align: center;
  }
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  img {
    height: 50px;
    width: auto;
    display: block;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: #e8decc;
    opacity: 0.9;
  }

  @media (max-width: 520px) {
    img {
      height: 40px;
    }

    span {
      font-size: 0.85rem;
      letter-spacing: 0.08em;
    }
  }
`;


export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 860px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 36px;

  a {
    color: #bdbdbd;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 860px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px;
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    padding: 10px 28px;
    border-radius: 999px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #e8decc;
      color: #000000;
      border-color: #e8decc;
    }
  }

  @media (max-width: 520px) {
    width: 100%;

    button {
      width: 100%;
      max-width: 280px;
    }
  }
`;
