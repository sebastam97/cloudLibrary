"use client";
import styled from "styled-components";

import { device } from "@/constants/breakpoints";

export const BooksListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
  margin: 2rem auto 0;
  padding: 0 1rem;

  @media ${device.sm} {
    padding: 0 1.5rem;
    gap: 1.5rem;
  }

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2rem;
    gap: 2rem;
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  @media ${device.xl} {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1600px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const EmptyTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const EmptySubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray.text};
  font-size: 1rem;
  opacity: 0.8;
`;

export const EmptyText = styled.p`
  color: ${({ theme }) => theme.colors.gray.text};
  font-size: 1.125rem;
  text-align: center;
`;
