"use client";
import styled from "styled-components";

import { device } from "@/constants/breakpoints";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0;
  scroll-behavior: smooth;
  align-items: flex-start;
  & > * {
    flex: 0 0 220px;
    width: 220px;
    max-width: 220px;
    min-width: 120px;
    position: relative;
  }

  scrollbar-width: none;
`;

export const CarouselTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: left;
  @media ${device.sm} {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const CarouselArrow = styled.button<{ left?: boolean | undefined }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 0.5rem;" : "right: 0.5rem;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #0002;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  @media ${device.sm} {
    width: 2.5rem;
    height: 2.5rem;
    ${({ left }) => (left ? "left: 0.5rem;" : "right: 0.5rem;")}
  }
  @media ${device.sm} {
    width: 2rem;
    height: 2rem;
    ${({ left }) => (left ? "left: 0.1rem;" : "right: 0.1rem;")}
  }
`;
