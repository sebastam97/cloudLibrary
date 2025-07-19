import { CircularProgress } from "@heroui/progress";

import { useBooksListHook } from "./hooks/useBooksListHook/useBooksListHook";
import {
  BooksListContainer,
  EmptyContainer,
  EmptyIcon,
  EmptySubtitle,
  EmptyText,
  EmptyTitle,
  LoadingContainer,
} from "./styles/BooksList.styles";

import BookCard from "@/app/home/find/shared/components/Card/Card";

function BooksList() {
  const { data, isLoading, error, isDefaultSearch } = useBooksListHook();

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress label="Cargando libros..." />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <EmptyContainer>
        <EmptyText>
          Error al cargar los libros. Inténtalo de nuevo más tarde.
        </EmptyText>
      </EmptyContainer>
    );
  }

  if (data.length === 0 && !isDefaultSearch) {
    return (
      <EmptyContainer>
        <EmptyIcon>📚</EmptyIcon>
        <EmptyTitle>No se encontraron libros</EmptyTitle>
        <EmptySubtitle>Intenta con otros términos de búsqueda</EmptySubtitle>
      </EmptyContainer>
    );
  }

  return (
    <BooksListContainer>
      {data.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </BooksListContainer>
  );
}

export default BooksList;
