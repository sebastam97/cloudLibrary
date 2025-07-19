"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useBooksStore } from "../../store/books.store";

function BooksSearchHandler() {
  const searchParams = useSearchParams();
  const setBooks = useBooksStore((state) => state.setBooks);

  useEffect(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    if (category) {
      setBooks(category);
    } else if (search) {
      setBooks(search);
    }
  }, [searchParams, setBooks]);

  return null; // Este componente no renderiza nada, solo maneja la lógica
}

export default BooksSearchHandler;
