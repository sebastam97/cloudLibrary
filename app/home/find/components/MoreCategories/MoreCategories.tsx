"use client";

import { Button } from "@heroui/button";
import Link from "next/link";
import {
  BsArrowRight,
  BsBook,
  BsFire,
  BsHeart,
  BsLightbulb,
  BsRocket,
  BsShield,
} from "react-icons/bs";

import {
  CategoriesGrid,
  CategoryBody,
  CategoryButton,
  CategoryCard,
  CategoryContent,
  CategoryCount,
  CategoryDescription,
  CategoryHeader,
  CategoryIcon,
  CategoryName,
  CategoryPattern,
  CategoryTop,
  Container,
  Header,
  PatternIcon,
  Section,
  Subtitle,
  Title,
  ViewAllContainer,
} from "./styles/MoreCategories.styles";

const categories = [
  {
    name: "Ciencia Ficción",
    icon: BsRocket,
    description: "Explora mundos futuristas y tecnologías avanzadas",
    gradient: "#3b82f6, #9333ea",
    count: "2,450+ libros",
  },
  {
    name: "Romance",
    icon: BsHeart,
    description: "Historias de amor que tocan el corazón",
    gradient: "#ec4899, #f43f5e",
    count: "3,200+ libros",
  },
  {
    name: "Thriller",
    icon: BsFire,
    description: "Suspense y misterio que te mantendrán en vilo",
    gradient: "#dc2626, #ea580c",
    count: "1,800+ libros",
  },
  {
    name: "Fantasía",
    icon: BsShield,
    description: "Mundos mágicos y aventuras épicas",
    gradient: "#059669, #0d9488",
    count: "2,100+ libros",
  },
  {
    name: "Historia",
    icon: BsBook,
    description: "Descubre el pasado a través de grandes relatos",
    gradient: "#d97706, #eab308",
    count: "1,500+ libros",
  },
  {
    name: "Autoayuda",
    icon: BsLightbulb,
    description: "Herramientas para el crecimiento personal",
    gradient: "#0891b2, #3b82f6",
    count: "900+ libros",
  },
];

export default function MoreCategories() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Explora por Categorías</Title>
          <Subtitle>
            Encuentra exactamente lo que buscas navegando por nuestras
            categorías cuidadosamente organizadas
          </Subtitle>
        </Header>

        <CategoriesGrid>
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <CategoryCard key={category.name}>
                <CategoryHeader $gradient={category.gradient}>
                  <CategoryPattern>
                    <PatternIcon className="top-right">
                      <IconComponent />
                    </PatternIcon>
                    <PatternIcon className="bottom-left">
                      <IconComponent />
                    </PatternIcon>
                  </CategoryPattern>

                  <CategoryContent>
                    <CategoryTop>
                      <CategoryIcon>
                        <IconComponent />
                      </CategoryIcon>
                      <CategoryName>{category.name}</CategoryName>
                    </CategoryTop>
                    <CategoryCount>{category.count}</CategoryCount>
                  </CategoryContent>
                </CategoryHeader>

                <CategoryBody>
                  <CategoryDescription>
                    {category.description}
                  </CategoryDescription>

                  <CategoryButton>
                    <Button
                      as={Link}
                      className="category-button"
                      color="primary"
                      endContent={<BsArrowRight size={16} />}
                      href={`/books?category=${encodeURIComponent(category.name)}`}
                      variant="flat"
                    >
                      Explorar {category.name}
                    </Button>
                  </CategoryButton>
                </CategoryBody>
              </CategoryCard>
            );
          })}
        </CategoriesGrid>

        <ViewAllContainer>
          <Button
            as={Link}
            endContent={<BsArrowRight size={20} />}
            href="/categories"
            size="lg"
            variant="bordered"
          >
            Ver Todas las Categorías
          </Button>
        </ViewAllContainer>
      </Container>
    </Section>
  );
}
