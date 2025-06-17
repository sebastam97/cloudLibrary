'use client';

import { device } from '@/constants/breakpoints';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '@/constants/theme';

export const HeaderContainer = styled.header`
  background: ${theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.accent};
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media ${device.md} {
    gap: 16px;
  }
`;

export const NavLink = styled(Link)`
  color: ${theme.colors.text};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const headerStyles = {
  container: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text
  },
  title: {
    color: theme.colors.accent
  }
};

export const CartContainer = styled.div`
  position: relative;
`;

export const CartBadge = styled.span`
  background: ${theme.colors.danger};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: -8px;
  right: -8px;
`;
