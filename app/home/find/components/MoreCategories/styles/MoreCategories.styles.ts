"use client";

import styled from "styled-components";

import { device } from "@/constants/breakpoints";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 4rem 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 1200px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};

  @media ${device.md} {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray.text};
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.6;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CategoryCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray.line};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const CategoryHeader = styled.div<{ $gradient: string }>`
  height: 8rem;
  background: linear-gradient(135deg, ${(props) => props.$gradient});
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  color: white;
`;

export const CategoryPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.2;
`;

export const PatternIcon = styled.div`
  position: absolute;

  &.top-right {
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
  }

  &.bottom-left {
    bottom: 1rem;
    left: 1rem;
    font-size: 1.5rem;
    opacity: 0.5;
  }
`;

export const CategoryContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CategoryTop = styled.div``;

export const CategoryIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const CategoryName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
`;

export const CategoryCount = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
`;

export const CategoryBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CategoryDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray.text};
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const CategoryButton = styled.div`
  .category-button {
    width: 100%;
    transition: all 0.3s ease;
  }

  ${CategoryCard}:hover .category-button {
    background-color: ${({ theme }) => theme.colors.primary.DEFAULT} !important;
    color: ${({ theme }) => theme.colors.primary.foreground} !important;
  }
`;

export const ViewAllContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;
