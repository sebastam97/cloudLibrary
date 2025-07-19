"use client";
import { FormikProvider, useFormik } from "formik";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import BooksList from "../components/BooksList/BooksList";
import Search from "../components/Search/Search";
import { initialsSearchBooks } from "../models/initials/books.initials";
import { useBooksStore } from "../store/books.store";
import { BooksContainer, BooksTitle } from "../styles/Books.styles";

function Books() {
  const searchParams = useSearchParams();
  const setBooks = useBooksStore((state) => state.setBooks);

  const formik = useFormik({
    initialValues: initialsSearchBooks,
    onSubmit: () => {},
  });

  useEffect(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    if (category) {
      setBooks(category);
    } else if (search) {
      setBooks(search);
    }
  }, [searchParams, setBooks]);

  return (
    <FormikProvider value={formik}>
      <BooksContainer>
        <BooksTitle>Catálogo de Libros</BooksTitle>
        <Search />
        <BooksList />
      </BooksContainer>
    </FormikProvider>
  );
}

export default Books;
