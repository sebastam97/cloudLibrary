"use client";
import { FormikProvider, useFormik } from "formik";

import BooksList from "../components/BooksList/BooksList";
import Search from "../components/Search/Search";
import { initialsSearchBooks } from "../models/initials/books.initials";
import { BooksContainer, BooksTitle } from "../styles/Books.styles";

function Books() {
  const formik = useFormik({
    initialValues: initialsSearchBooks,
    onSubmit: (values) => {},
  });

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
