"use client";
import styled from "styled-components";

export const BooksContainer = styled.div`
  width: 100%;
`;

export const BooksTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
`;
