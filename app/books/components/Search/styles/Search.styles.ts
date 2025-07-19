"use client";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`;

export const SearchIcon = styled(BsSearch)`
  color: ${({ theme }) => theme.colors.gray.line};
  font-size: 20px;
`;
