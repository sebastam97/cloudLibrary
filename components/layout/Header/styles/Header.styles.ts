"use client";
import { Link } from "@heroui/link";
import { Navbar, NavbarContent, NavbarMenuToggle } from "@heroui/navbar";
import styled from "styled-components";

import { device } from "@/constants/breakpoints";
export const NavbarCustom = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.navbarBg};
  color: ${({ theme }) => theme.colors.navbarText};
`;
export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navbarText};
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  color: ${({ theme }) => theme.colors.navbarText};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NavbarContentCustom = styled(NavbarContent)`
  display: none;
  @media ${device.md} {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }
  color: ${({ theme }) => theme.colors.navbarText};
`;

export const NavbarMenuToggleCustom = styled(NavbarMenuToggle)`
  display: flex;
  @media ${device.md} {
    display: none;
  }
`;

export const IconContainer = styled.span`
  margin-right: 8px;
`;
export const NavbarItemCustom = styled.div`
  display: flex;
`;
