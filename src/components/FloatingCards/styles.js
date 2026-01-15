import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  z-index: 4;

  margin-top: 130px;
  padding: 0 clamp(20px, 6vw, 10%) 120px;

  pointer-events: none;

  @media (max-width: 700px) {
    margin-top: -150px;
    padding-bottom: 96px;
  }
`;

export const Grid = styled.div`
  max-width: 900px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  pointer-events: auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    gap: 24px;
  }

  @media (max-width: 520px) {
    max-width: 100%;
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 20px 16px;
  border-radius: 16px;
  min-height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  color: rgba(235,235,235,0.92);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.03em;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.18),
    0 16px 36px rgba(0,0,0,0.45);

  overflow: hidden;
  cursor: default;

  @media (max-width: 520px) {
    font-size: 0.85rem;
  }

  /* GLASS REAL */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 60%,
      rgba(255, 255, 255, 0.02) 100%
    );

    opacity: 0.1; /* CONTROLE  */
    pointer-events: none;
  }

  /* BORDA */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;

    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.28),
      rgba(255,255,255,0.12),
      rgba(255,255,255,0)
    );

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    pointer-events: none;
  }
`;
