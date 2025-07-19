import { BooksToLocalModels } from "../../models/local/books.local-model";
import { BooksServerResponse } from "../../models/server/books.server-model";

export const BooksToLocalAdapter = (
  data: BooksServerResponse,
): BooksToLocalModels[] => {
  return data.docs.map((book) => {
    const pages =
      book.bookDetails?.number_of_pages || book.number_of_pages_median || 0;
    const description =
      (typeof book.bookDetails?.description === "string"
        ? book.bookDetails.description
        : book.bookDetails?.description?.value) ||
      (book.first_sentence && typeof book.first_sentence === "string"
        ? book.first_sentence
        : Array.isArray(book.first_sentence)
          ? book.first_sentence[0]
          : book.subtitle) ||
      "Sin descripción disponible.";
    const category = book.bookDetails?.subjects?.[0] || "Sin categoría";
    const rating = Number((Math.random() * 1.5 + 3.5).toFixed(1));
    const publishedDate = String(
      book.bookDetails?.publish_date ||
        book.first_publish_year ||
        "Desconocido",
    );

    return {
      id: book.key,
      title: book.title,
      author: book.author_name?.[0] || "Desconocido",
      description,
      price: Number((Math.random() * 20 + 15).toFixed(2)),
      image: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : "/default-cover.jpg",
      category,
      rating,
      isbn: book.isbn?.[0] || "",
      publishedDate,
      pages,
    };
  });
};
