import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  width: 420px;
  padding: 40px;
  border-radius: 16px;

  background: rgba(20, 20, 25, 0.8);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255,255,255,0.08);

  box-shadow:
  0 20px 60px rgba(0,0,0,0.5),
  inset 0 0 20px rgba(255,255,255,0.02);
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;

  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 14px 16px;

  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.08);

  background: rgba(255,255,255,0.03);

  color: white;

  font-size: 15px;

  transition: 0.25s;

  &:focus {
    outline: none;

    border: 1px solid #E8DECC;

    background: rgba(255,255,255,0.05);
  }

  &::placeholder {
    color: rgba(255,255,255,0.4);
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