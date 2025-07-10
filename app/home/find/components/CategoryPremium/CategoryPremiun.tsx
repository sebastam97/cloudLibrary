import { CircularProgress } from "@heroui/progress";

import { useBooksQuery } from "../../query/query";
import Carousel from "../Carousel/Carousel";

import {
  Container,
  ErrorContainer,
  LoadingContainer,
} from "./styles/CategoryPremium.styles";

function CategoryPremiun() {
  const { data: books = [], isLoading, error } = useBooksQuery("harry potter");

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

    return <Carousel books={books} title={`🏆 Libros Premium`} />;
  };

  return <Container>{renderContent()}</Container>;
}

export default CategoryPremiun;
