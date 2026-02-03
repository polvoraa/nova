import styled from "styled-components";
import { LayoutBackground } from "../../styles/LayoutBackground";

export const Background = styled(LayoutBackground)`
  position: relative;
`;

export const StrongOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
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
    rgba(232, 222, 204, 0.14),
    rgba(232, 222, 204, 0)
  );
  top: -180px;
  right: -120px;
  filter: blur(10px);
  pointer-events: none;
`;

export const Hero = styled.section`
  position: relative;
  z-index: 1;
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

export const BrandingSection = styled.section`
  position: relative;
  z-index: 1;
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 0.04em;
`;

export const Masonry = styled.div`
  columns: 3 240px;
  column-gap: 20px;
`;

export const Photo = styled.figure`
  margin: 0 0 20px;
  break-inside: avoid;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: rgba(20, 20, 20, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const CTA = styled.p`
  margin-top: 64px;
  font-size: 1.05rem;
  max-width: 560px;
  color: ${({ theme }) => theme.colors.text};
`;
