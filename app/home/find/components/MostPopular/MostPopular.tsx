import { CircularProgress } from "@heroui/progress";

import { useBooksQuery } from "../../query/query";
import Carousel from "../Carousel/Carousel";

function MostPopular() {
  const { data: books = [], isLoading, error } = useBooksQuery("most popular");

  const renderContent = () => {
    if (isLoading) {
      return <CircularProgress label="Cargando libros..." />;
    }

    if (error) {
      return <div>Error al cargar los libros</div>;
    }

    return <Carousel books={books} title={`🔥 Más Populares`} />;
  };

  return <>{renderContent()}</>;
}

export default MostPopular;
