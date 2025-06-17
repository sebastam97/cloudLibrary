'use client';

import Link from 'next/link';

import { Button } from '@heroui/react';

import {
  Container,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CTASection,
  FeaturesSection,
  FeaturesContainer,
  FeaturesTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './styles/Home.styles';

export default function HomePage() {
  return (
    <Container>
      <HeroSection>
        <HeroTitle>Descubre tu próxima gran lectura</HeroTitle>
        <HeroSubtitle>
          Miles de libros esperándote. Encuentra, compra y disfruta de la mejor
          literatura desde la comodidad de tu hogar.
        </HeroSubtitle>
        <CTASection>
          <Link href="/books">
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600"
              size="lg"
            >
              Explorar Libros
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button
              className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              size="lg"
            >
              Crear Cuenta
            </Button>
          </Link>
        </CTASection>
      </HeroSection>

      <FeaturesSection>
        <FeaturesContainer>
          <FeaturesTitle>¿Por qué elegir BookStore?</FeaturesTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>📚</FeatureIcon>
              <FeatureTitle>Amplio Catálogo</FeatureTitle>
              <FeatureDescription>
                Miles de títulos de todos los géneros y autores. Desde
                bestsellers hasta joyas ocultas esperando ser descubiertas.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🚚</FeatureIcon>
              <FeatureTitle>Envío Rápido</FeatureTitle>
              <FeatureDescription>
                Recibe tus libros en tiempo récord. Envío gratuito en compras
                superiores a $50 y entrega express disponible.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>💰</FeatureIcon>
              <FeatureTitle>Mejores Precios</FeatureTitle>
              <FeatureDescription>
                Precios competitivos y ofertas exclusivas. Descuentos especiales
                para miembros y promociones semanales.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesSection>
    </Container>
  );
}
