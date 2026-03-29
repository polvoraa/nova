import styled from "styled-components";

export const Page = styled.div`
  min-height:100vh;
  background:#0a0a0a;
  display:flex;
  justify-content:center;
  padding:80px 40px;
`;

export const Container = styled.div`
  width:100%;
  max-width:1200px;
`;

export const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  margin-bottom:40px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Title = styled.h1`
  color:white;
  font-size:32px;
  font-weight:600;
`;

export const AddButton = styled.button`
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

  @media (max-width: 520px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
  gap:24px;
`;

export const Card = styled.div`
  background:rgba(255,255,255,0.04);
  border-radius:12px;
  overflow:hidden;
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,0.05);
  transition:0.25s;

  :hover{
    transform:translateY(-4px);
  }
`;

export const Image = styled.img`
  width:100%;
  height:200px;
  object-fit:cover;
`;

export const CardContent = styled.div`
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:10px;
`;

export const ProjectTitle = styled.h3`
  color:white;
  font-size:16px;
  font-weight:500;
`;

export const DeleteButton = styled.button`
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

  @media (max-width: 520px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;

  @media (max-width: 520px) {
    width: 100%;
  }
`;
