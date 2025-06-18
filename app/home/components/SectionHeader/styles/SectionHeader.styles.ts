"use client";

import styled from "styled-components";

import { device } from "@/constants/breakpoints";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.navbarBg};
  color: ${({ theme }) => theme.colors.textWthite};
  padding: 5rem 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media ${device.md} {
    font-size: 3.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;

  @media ${device.md} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media ${device.sm} {
    flex-direction: row;
  }
`;
