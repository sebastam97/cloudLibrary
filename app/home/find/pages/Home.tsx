"use client";

import { CircularProgress } from "@heroui/progress";

import Carousel from "../components/Carousel/Carousel";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { useBooksQuery } from "../query/query";
import { HomeContainer } from "../styles/Home.styles";

const Home = () => {
  const { data: books = [], isLoading, error } = useBooksQuery("harry potter");

  const renderContent = () => {
    if (isLoading) {
      return <CircularProgress label="Cargando libros..." />;
    }

    if (error) {
      return <div>Error al cargar los libros</div>;
    }

    return <Carousel books={books} title={`Harry Potter`} />;
  };

  return (
    <HomeContainer>
      <SectionHeader />
      {renderContent()}
    </HomeContainer>
  );
};

export default Home;
