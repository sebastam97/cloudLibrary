"use client";
import { CircularProgress } from "@heroui/progress";
import { FormikProvider, useFormik } from "formik";
import { Suspense } from "react";

import BooksList from "../components/BooksList/BooksList";
import BooksSearchHandler from "../components/BooksSearchHandler/BooksSearchHandler";
import Search from "../components/Search/Search";
import { initialsSearchBooks } from "../models/initials/books.initials";
import { BooksContainer, BooksTitle } from "../styles/Books.styles";

function Books() {
  const formik = useFormik({
    initialValues: initialsSearchBooks,
    onSubmit: () => {},
  });

  return (
    <FormikProvider value={formik}>
      <BooksContainer>
        <BooksTitle>Catálogo de Libros</BooksTitle>
        <Suspense fallback={<CircularProgress label="Cargando..." />}>
          <BooksSearchHandler />
        </Suspense>
        <Search />
        <BooksList />
      </BooksContainer>
    </FormikProvider>
  );
}

export default Books;
