import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 0 clamp(20px, 6vw, 10%) 180px;

  @media (max-width: 700px) {
    padding: 0 6% 120px;
  }
`;

export const Shell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 28px;
  align-items: stretch;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.div`
  padding: 42px;
  border: 1px solid rgba(232, 222, 204, 0.12);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(8, 8, 8, 0.48);
  backdrop-filter: blur(14px);

  @media (max-width: 700px) {
    padding: 28px;
  }
`;

export const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 18px;
  color: rgba(232, 222, 204, 0.7);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0 0 18px;
  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: 400;
  line-height: 1.04;
`;

export const Copy = styled.p`
  margin: 0;
  max-width: 540px;
  color: rgba(232, 222, 204, 0.78);
  font-size: 1rem;
  line-height: 1.75;
`;

export const Details = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 32px;
`;

export const DetailCard = styled.div`
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(232, 222, 204, 0.08);

  strong {
    display: block;
    margin-bottom: 6px;
    font-size: 0.96rem;
    font-weight: 500;
  }

  span {
    color: rgba(232, 222, 204, 0.7);
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

export const FormCard = styled.div`
  padding: 42px;
  border-radius: 28px;
  border: 1px solid rgba(232, 222, 204, 0.16);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04)),
    rgba(26, 26, 26, 0.56);
  color: #f4ebdc;
  backdrop-filter: blur(14px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);

  @media (max-width: 700px) {
    padding: 28px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 16px;
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 18px;
  border: 1px solid rgba(232, 222, 204, 0.12);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: #f4ebdc;
  font-family: inherit;
  font-size: 0.96rem;
  outline: none;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;

  &::placeholder {
    color: rgba(232, 222, 204, 0.5);
  }

  &:focus {
    border-color: rgba(232, 222, 204, 0.36);
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }
`;

export const Textarea = styled.textarea`
  min-height: 180px;
  resize: vertical;
  width: 100%;
  padding: 17px 18px;
  border: 1px solid rgba(232, 222, 204, 0.12);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  color: #f4ebdc;
  font-family: inherit;
  font-size: 0.96rem;
  line-height: 1.6;
  outline: none;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;

  &::placeholder {
    color: rgba(232, 222, 204, 0.5);
  }

  &:focus {
    border-color: rgba(232, 222, 204, 0.36);
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  margin-top: 6px;
  padding: 16px 24px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(40, 40, 40, 0.45) 0%,
    rgba(40, 40, 40, 0.18) 60%,
    rgba(40, 40, 40, 0.02) 100%
  );
  color: rgba(230, 230, 230, 0.9);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease;
  overflow: hidden;

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

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    background: linear-gradient(
      180deg,
      rgba(50, 50, 50, 0.55) 0%,
      rgba(50, 50, 50, 0.22) 60%,
      rgba(50, 50, 50, 0.04) 100%
    );
    box-shadow: 0 18px 32px rgba(17, 17, 17, 0.18);
    box-shadow:
      0 14px 30px rgba(0,0,0,0.35),
      0 0 26px rgba(232, 222, 204, 0.18);
  }

  &:hover:not(:disabled)::after {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`;

export const StatusMessage = styled.p`
  margin: 0;
  color: ${({ $type }) => ($type === "error" ? "#9f2d2d" : "#1d5b2c")};
  font-size: 0.9rem;
  line-height: 1.5;
`;
