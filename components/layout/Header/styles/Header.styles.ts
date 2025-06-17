"use client";
import { Link } from "@heroui/link";
import { NavbarContent } from "@heroui/navbar";
import styled from "styled-components";

import { device } from "@/constants/breakpoints";
export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
`;

export const NavbarContentCustom = styled(NavbarContent)`
  display: none;
  @media ${device.md} {
    display: flex;
  }
`;
