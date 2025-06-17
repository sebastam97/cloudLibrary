'use client';
import { device } from '@/constants/breakpoints';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 60px 0 30px;
  margin-top: 80px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #f9fafb;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 12px;
  }

  a {
    color: #d1d5db;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #3b82f6;
    }
  }

  p {
    color: #d1d5db;
    line-height: 1.6;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: #374151;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background: #3b82f6;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media ${device.md} {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: #9ca3af;
  margin: 0;
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const PaymentIcon = styled.div`
  background: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #1f2937;
`;
