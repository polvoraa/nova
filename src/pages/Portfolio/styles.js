import styled from "styled-components";
import { LayoutBackground } from "../../styles/LayoutBackground";

export const Background = styled(LayoutBackground)`
  position: relative;
`;

export const StrongOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.70);
  pointer-events: none;
`;

export const Page = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  padding: 140px clamp(20px, 8vw, 120px) 120px;
  z-index: 1;
`;

export const Glow = styled.div`
  position: absolute;
  width: 820px;
  height: 620px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(232, 222, 204, 0.08),
    rgba(232, 222, 204, 0)
  );
  top: -180px;
  right: -120px;
  filter: blur(10px);
  pointer-events: none;
`;

export const Hero = styled.section`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.35em;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Title = styled.h1`
  font-size: clamp(2.4rem, 3.6vw, 3.5rem);
  line-height: 1.1;
  font-weight: 500;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  max-width: 680px;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
`;

export const Section = styled.section`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 0.04em;
`;

export const MasonryGrid = styled.div`
  column-count: 3;
  column-gap: 20px;

  @media (max-width: 1100px) {
    column-count: 2;
  }

  @media (max-width: 700px) {
    column-count: 1;
  }
`;

export const MediaCard = styled.figure`
  margin: 0 0 20px;
  break-inside: avoid;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: rgba(20, 20, 20, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
  cursor: pointer;

  img {
    width: 100%;
    display: block;
    transition: transform 0.4s ease-in-out;
  }

  &:hover img {
    transform: scale(1.15);
  }
`;

export const VideoCard = styled(MediaCard)`
  video {
    width: 100%;
    display: block;
  }
`;

export const PdfCard = styled(MediaCard)`
  cursor: pointer;
  
  .pdf-placeholder {
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1a1a1a;
    color: #E8DECC;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    border-radius: 8px;

    .pdf-icon {
      font-size: 3.5rem;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 1.1rem;
      margin: 0 0 8px;
      font-weight: 500;
      color: #E8DECC;
    }

    p {
      font-size: 0.9rem;
      color: rgba(232, 222, 204, 0.7);
      margin: 0 0 12px;
      line-height: 1.4;
    }

    .pdf-link {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #E8DECC;
      border-bottom: 1px solid rgba(232, 222, 204, 0.3);
      padding-bottom: 2px;
    }
  }

  &:hover .pdf-placeholder {
    background: #2a2a2a;
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }
`;