import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
`;

export const Container = styled.div`
  width: 420px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
  color: #E8DECC;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const glassInputStyles = `
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: white;
  padding: 12px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #E8DECC;
    box-shadow: 0 0 10px rgba(232, 222, 204, 0.35);
  }
`;

export const Input = styled.input`
  ${glassInputStyles}
`;

export const Textarea = styled.textarea`
  ${glassInputStyles}
  min-height: 90px;
  resize: none;
`;

export const FileInput = styled.input`
  color: white;
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
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
  transition: all 0.35s ease;
  overflow: hidden;

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
      rgba(255, 255, 255, 0.25),
      transparent
    );
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(
      180deg,
      rgba(70, 70, 70, 0.55) 0%,
      rgba(70, 70, 70, 0.25) 70%,
      rgba(70, 70, 70, 0.08) 100%
    );
    color: #E8DECC;
    box-shadow:
      0 14px 34px rgba(0, 0, 0, 0.45),
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

export const FileInputWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 14px 38px;
  border-radius: 14px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);

  color: #E8DECC;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  cursor: pointer;
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.45),
    0 0 26px rgba(232, 222, 204, 0.09);

  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;

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
      rgba(255, 255, 255, 0.25),
      transparent
    );
  }

  &:hover {
    transform: scale(1.01);
  }

  input {
    display: none;
  }

  svg {
    font-size: 20px;
  }
`;