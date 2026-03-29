import styled from "styled-components";

const actionButtonStyles = `
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
  box-shadow: 0 12px 26px rgba(0,0,0,0.35);
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
`;

export const Page = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  padding: 80px 40px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  ${actionButtonStyles}
`;

export const EmptyState = styled.div`
  padding: 32px;
  border-radius: 18px;
  color: rgba(232, 222, 204, 0.84);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const MessagesGrid = styled.div`
  display: grid;
  gap: 20px;
`;

export const MessageCard = styled.article`
  padding: 24px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`;

export const Name = styled.h2`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Email = styled.a`
  color: #e8decc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.8);
  flex-wrap: wrap;
`;

export const Label = styled.span`
  color: rgba(232, 222, 204, 0.62);
  font-size: 0.86rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const Value = styled.span`
  color: white;
  font-size: 0.96rem;
`;

export const MessageText = styled.p`
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.75;
  white-space: pre-wrap;
`;
