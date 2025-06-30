"use client";

import { useEffect, useState } from "react";

import Carousel from "../components/Carousel/Carousel";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { HomeContainer } from "../styles/Home.styles";

const fetchBookPages = async (book: any) => {
  let pages = null;

  try {
    if (book.cover_edition_key) {
      const res = await fetch(
        `https://openlibrary.org/books/${book.cover_edition_key}.json`,
      );

      if (res.ok) {
        const data = await res.json();

        pages = data.number_of_pages || null;
      }
    }
    if (!pages && book.key) {
      const workKey = book.key.replace("/works/", "");
      const res = await fetch(`https://openlibrary.org/works/${workKey}.json`);

      if (res.ok) {
        const data = await res.json();

        pages = data.number_of_pages || null;
      }
    }
  } catch (e) {
    // Ignorar errores
  }

  return pages;
};

const fetchBookCategory = async (book: any) => {
  let category = null;

  try {
    if (book.key) {
      const workKey = book.key.replace("/works/", "");
      const res = await fetch(`https://openlibrary.org/works/${workKey}.json`);

      if (res.ok) {
        const data = await res.json();

        if (Array.isArray(data.subjects) && data.subjects.length > 0) {
          category = data.subjects.slice(0, 2).join(", ");
        }
      }
    }
  } catch (e) {}

  return category;
};

const fetchBooks = async (query: string) => {
  const res = await fetch(
    `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`,
  );
  const data = await res.json();

  let books = await Promise.all(
    data.docs.slice(0, 12).map(async (book: any) => {
      let pages = book.number_of_pages_median || book.number_of_pages || null;

      if (!pages) {
        pages = await fetchBookPages(book);
      }

      const pagesNum = Number(pages);

      let category =
        Array.isArray(book.subject) && book.subject.length > 0
          ? book.subject[0]
          : null;

      if (!category) {
        category = await fetchBookCategory(book);
        if (category && category.includes(", ")) {
          category = category.split(", ")[0];
        }
      }

      return {
        id: book.cover_edition_key || book.key,
        title: book.title,
        author: book.author_name?.[0] || "Desconocido",
        description:
          (book.first_sentence && typeof book.first_sentence === "string"
            ? book.first_sentence
            : Array.isArray(book.first_sentence)
              ? book.first_sentence[0]
              : book.subtitle) || "Sin descripción disponible.",
        price: Number((Math.random() * 20 + 15).toFixed(2)),
        image: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : "/default-cover.jpg",
        category: category || "Sin categoría",
        rating: (Math.random() * 1.5 + 3.5).toFixed(1),
        isbn: book.isbn?.[0] || "",
        publishedDate: book.first_publish_year || "Desconocido",
        pages: !isNaN(pagesNum) && pagesNum > 0 ? pagesNum : null,
      };
    }),
  );

  return books;
};

const Home = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetchBooks("harry potter").then(setBooks);
  }, []);

  return (
    <HomeContainer>
      <SectionHeader />
      <Carousel books={books} title="Libros de Open Library" />
    </HomeContainer>
  );
};

export default Home;
