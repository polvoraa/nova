import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  z-index: 2;

  padding: 300px clamp(20px, 6vw, 10%) 840px;
  text-align: center;

  /* overlay suave para foco */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
    rgba(0,0,0,0) 92%,
    rgba(0,0,0,0.25) 97%,
    rgba(0,0,0,0) 100%
    );
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 700px) {
    padding: 180px 6% 630px;
  }
`;

export const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.25;
  margin-bottom: 48px;

  @media (max-width: 700px) {
    margin-bottom: 32px;
  }
`;

export const Button = styled.button`
  position: relative;

  padding: 14px 38px;
  border-radius: 14px;
  border: none;

  background: #E8DECC;

  color: black;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.03em;

  cursor: pointer;

  box-shadow:
    0 12px 26px rgba(0,0,0,0.35);

  transition: all 0.35s ease;
  overflow: hidden;

  /* glow cinematico */
  &::after {
    content: "";
    position: absolute;
    inset: -40%;
    background: radial-gradient(
      circle,
      rgba(232, 222, 204, 0.35) 0%,
      rgba(232, 222, 204, 0.18) 35%,
      rgba(232, 222, 204, 0) 70%
    );
    opacity: 0;
    filter: blur(18px);
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  /* linha superior */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 16%;
    right: 16%;
    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.25),
      transparent
    );
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(
      180deg,
      rgba(70,70,70,0.55) 0%,
      rgba(70,70,70,0.25) 70%,
      rgba(70,70,70,0.08) 100%
    );
    color: #E8DECC;
    box-shadow:
      0 14px 34px rgba(0,0,0,0.45),
      0 0 26px rgba(232, 222, 204, 0.22);
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 520px) {
    width: 100%;
    max-width: 320px;
  }
`;
