import { CircularProgress } from "@heroui/progress";

import { useBooksQuery } from "../../query/query";
import Carousel from "../Carousel/Carousel";

import {
  Container,
  ErrorContainer,
  LoadingContainer,
} from "./styles/MostPopular.styles";

function MostPopular() {
  const { data: books = [], isLoading, error } = useBooksQuery("most popular");

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <CircularProgress label="Cargando libros..." />
        </LoadingContainer>
      );
    }

    if (error) {
      return (
        <ErrorContainer>
          <div>Error al cargar los libros</div>
        </ErrorContainer>
      );
    }

    return <Carousel books={books} title={`🔥 Más Populares`} />;
  };

  return <Container>{renderContent()}</Container>;
}

export default MostPopular;
