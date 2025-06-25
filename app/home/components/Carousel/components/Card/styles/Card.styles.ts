"use client";

import styled from "styled-components";

import { device } from "@/constants/breakpoints";

export const CardContainer = styled.div.attrs<{ $imageLoaded?: boolean }>(
  () => ({}),
)<{ $imageLoaded?: boolean }>`
  flex: 0 0 140px;
  width: 140px;
  max-width: 140px;
  min-width: 120px;
  min-height: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 24px #0002;
  background: ${({ theme }) => theme.colors.background};
  border: 0;
  transition:
    box-shadow 0.3s,
    transform 0.3s,
    opacity 0.3s;
  opacity: ${({ $imageLoaded }) => ($imageLoaded ? 1 : 0)};
  &:hover {
    box-shadow: 0 8px 32px #0003;
    transform: scale(1.05) translateY(-8px);
  }

  @media ${device.lg} {
    flex: 0 0 140px;
    width: 140px;
    max-width: 140px;
    min-width: 120px;
  }
  @media ${device.md} {
    flex: 0 0 120px;
    width: 120px;
    max-width: 120px;
    min-width: 100px;
  }
  @media ${device.sm} {
    flex: 0 0 90vw;
    width: 90vw;
    max-width: 100vw;
    min-width: 0;
    min-height: 260px;
    font-size: 0.9rem;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px #0001;
  }
`;

export const CardHeaderStyled = styled.div`
  position: absolute;
  z-index: 30;
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  pointer-events: none;
`;

export const CardChipStyled = styled.div.attrs<{
  $gradient?: string;
  $hovered?: boolean;
  $pulse?: boolean;
}>(() => ({}))<{
  $gradient?: string;
  $hovered?: boolean;
  $pulse?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${({ $gradient, theme }) =>
    $gradient
      ? theme.colors.gradients.bluePurple
      : theme.colors.secondary.blueLight};
  color: ${({ theme }) => theme.colors.primary.foreground};
  box-shadow: 0 2px 8px #0001;
  margin-bottom: 0.25rem;
  transform: ${({ $hovered }) => ($hovered ? "scale(1.1)" : "scale(1)")};
  animation: ${({ $pulse }) => ($pulse ? "pulse 1.5s infinite" : "none")};
  pointer-events: auto;
  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.secondary.green}44;
    }
    50% {
      box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.secondary.green}22;
    }
  }
`;

export const CardImageStyled = styled.img<{ $hovered?: boolean }>`
  width: 100%;
  height: 320px;
  object-fit: cover;
  transition: transform 0.7s;
  transform: ${({ $hovered }) => ($hovered ? "scale(1.1)" : "scale(1)")};
  @media ${device.md} {
    height: 220px;
  }
  @media ${device.sm} {
    height: 160px;
  }
`;

export const CardImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CardBodyStyled = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1 1 auto;
  min-height: 0;
  @media ${device.md} {
    padding: 0.7rem;
    gap: 0.5rem;
  }
  @media ${device.sm} {
    padding: 0.5rem;
    gap: 0.3rem;
  }
`;

export const CardBodySpacer = styled.div`
  flex: 1;
`;

export const CardFooterStyled = styled.div`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: auto;
  @media ${device.md} {
    padding: 0.7rem 0.7rem 0 0.7rem;
  }
  @media ${device.sm} {
    padding: 0.5rem 0.5rem 0 0.5rem;
  }
`;

export const CardStarsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.secondary.yellow};
`;

export const CardStatsStyled = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const CardStatStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const CardTitleStyled = styled.h4`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.2;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardAuthorStyled = styled.p`
  color: ${({ theme }) => theme.colors.gray.mid};
  font-weight: 500;
  font-size: 0.95rem;
  margin: 0;
`;

export const CardDescriptionStyled = styled.p`
  color: ${({ theme }) => theme.colors.gray.text};
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardPrice = styled.div.attrs<{ $hovered?: boolean }>(() => ({}))<{
  $hovered?: boolean;
}>`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.secondary.greenDark : theme.colors.secondary.green};
  color: ${({ theme }) => theme.colors.primary.foreground};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 0.95rem;
  box-shadow: 0 2px 8px #0002;
  transition: all 0.3s;
  transform: ${({ $hovered }) => ($hovered ? "scale(1.1)" : "scale(1)")};
`;
export const CardOverlay = styled.div.attrs<{ $active?: boolean }>(() => ({}))<{
  $active?: boolean;
}>`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.5s;
  pointer-events: none;
`;
export const CardFooterButtonHero = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
