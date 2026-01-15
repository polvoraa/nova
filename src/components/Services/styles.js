import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  z-index: 2;

  padding: 160px 10% 180px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 80px;
`;

export const Grid = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 42px 34px;

  border-radius: 18px;
  text-align: center;

  background: linear-gradient(
    180deg,
    rgba(40,40,40,0.45) 0%,
    rgba(40,40,40,0.2) 60%,
    rgba(40,40,40,0.05) 100%
  );

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.05),
    0 20px 40px rgba(0,0,0,0.45);

  transition: transform 0.35s ease;
`;

export const Icon = styled.div`
  width: 44px;
  height: 44px;

  margin: 0 auto 22px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.1rem;

  background: rgba(255,255,255,0.06);
  color: rgba(232,222,204,0.85);

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.12);
`;

export const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 14px;
`;

export const CardText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #b5b5b5;
`;
