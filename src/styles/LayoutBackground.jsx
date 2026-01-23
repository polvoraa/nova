import styled from "styled-components";
import bgLanding from "../assets/bg-landing.jpg";

export const LayoutBackground = styled.div`
  min-height: 100vh;
  position: relative;

  background-image: url(${bgLanding});
  background-size: cover;
  background-position: center -120px;
  background-repeat: no-repeat;

  /* evita bugs de scroll */
  overflow-x: hidden;

  @media (max-width: 700px) {
    background-position: center top;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  pointer-events: none;
`;
