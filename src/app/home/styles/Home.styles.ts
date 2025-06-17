import styled from 'styled-components';
import theme from '@/constants/theme';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.accent} 100%
  );
`;

export const HeroSection = styled.section`
  padding: 100px 24px;
  text-align: center;
  color: ${theme.colors.text};
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTASection = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FeaturesSection = styled.section`
  padding: 80px 24px;
  background: white;
`;

export const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
  color: ${theme.colors.text};
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

export const FeatureCard = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

export const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
  color: ${theme.colors.text};
`;

export const FeatureDescription = styled.p`
  color: ${theme.colors.secondary};
  line-height: 1.6;
`;
