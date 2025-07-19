import { useBooksQuery } from "../../../../query/query";
import { useBooksStore } from "../../../../store/books.store";

export const useBooksListHook = () => {
  const searchBooks = useBooksStore((state) => state.searchBooks);
  const { data, isLoading, error } = useBooksQuery(searchBooks);
  const isDefaultSearch = !searchBooks || searchBooks.trim() === "";

  return {
    data: data || [],
    isLoading,
    error,
    isDefaultSearch,
    searchTerm: searchBooks,
  };
};
