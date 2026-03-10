import styled from "styled-components";

/* HERO SECTION */
export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 0 clamp(20px, 6vw, 10%);

  display: flex;
  align-items: flex-start;
  justify-content: center;

  overflow: hidden;
`;


/* Conteúdo central */
export const Content = styled.div`
  position: relative;
  z-index: 2;

  max-width: 820px;
  text-align: center;
  margin: 0 auto;
  margin-top: 35vh;

  h1 {
    font-size: clamp(2.4rem, 6.5vw, 4.4rem);
    font-weight: 100;
    letter-spacing: -0.02em;
  }

  p {
    margin: 32px auto 0;
    max-width: 600px;

    color: #f4ebdc;
    line-height: 1.7;
  }

  @media (max-width: 700px) {
    margin-top: 34vh;

    p {
      margin-top: 22px;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 30vh;
  }
`;

/* Botão Hero */
export const HeroButton = styled.button`
  position: relative;
  margin: 52px auto 0;
  padding: 14px 52px;

  border-radius: 10px;
  border: none;

  background: linear-gradient(
    180deg,
    rgba(40, 40, 40, 0.45) 0%,
    rgba(40, 40, 40, 0.18) 60%,
    rgba(40, 40, 40, 0.02) 100%
  );

  color: rgba(230, 230, 230, 0.85);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.03em;

  display: block;
  cursor: pointer;

  box-shadow: 0 10px 24px rgba(0,0,0,0.25);
  transition: all 0.35s ease;
  overflow: hidden;

  /* glow cinematico */
  &::after {
    content: "";
    position: absolute;
    inset: -60%;
    background: conic-gradient(
      from 180deg,
      rgba(232, 222, 204, 0) 0deg,
      rgba(232, 222, 204, 0.2) 30deg,
      rgba(232, 222, 204, 0.06) 80deg,
      rgba(232, 222, 204, 0.2) 140deg,
      rgba(232, 222, 204, 0) 200deg,
      rgba(232, 222, 204, 0.14) 260deg,
      rgba(232, 222, 204, 0) 320deg
    );
    opacity: 0;
    filter: blur(20px);
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  /* linha superior */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 12%;
    right: 12%;
    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.25),
      transparent
    );
  }

  &:hover {
    transform: translateY(-1px);

    background: linear-gradient(
      180deg,
      rgba(50, 50, 50, 0.55) 0%,
      rgba(50, 50, 50, 0.22) 60%,
      rgba(50, 50, 50, 0.04) 100%
    );
    box-shadow:
      0 14px 30px rgba(0,0,0,0.35),
      0 0 26px rgba(232, 222, 204, 0.18);
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 520px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  background: linear-gradient(
    180deg,
    rgba(16, 14, 17, 0.9) 0%,
    rgba(16, 14, 17, 0.6) 25%,
    rgba(16, 14, 17, 0.25) 50%,
    rgba(16, 14, 17, 0.08) 70%,
    rgba(16, 14, 17, 0) 100%
  );

  pointer-events: none;
`;

