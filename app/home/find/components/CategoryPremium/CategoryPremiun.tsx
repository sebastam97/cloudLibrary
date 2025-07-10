import { CircularProgress } from "@heroui/progress";

import { useBooksQuery } from "../../query/query";
import Carousel from "../Carousel/Carousel";

function CategoryPremiun() {
  const { data: books = [], isLoading, error } = useBooksQuery("harry potter");

  const renderContent = () => {
    if (isLoading) {
      return <CircularProgress label="Cargando libros..." />;
    }

    if (error) {
      return <div>Error al cargar los libros</div>;
    }

    return <Carousel books={books} title={`🏆 Libros Premium`} />;
  };

  return <>{renderContent()}</>;
}

export default CategoryPremiun;
