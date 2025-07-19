import { useQuery } from "@tanstack/react-query";

import { BooksToLocalAdapter } from "../adapters/local/books.local-adapter";
import { BooksToLocalModels } from "../models/local/books.local-model";
import {
  BooksServerModels,
  BooksServerResponse,
} from "../models/server/books.server-model";

const fetchBookDetails = async (book: BooksServerModels) => {
  try {
    let details = null;
    let pages = null;

    if (book.cover_edition_key) {
      const editionRes = await fetch(
        `https://openlibrary.org/books/${book.cover_edition_key}.json`,
      );

      if (editionRes.ok) {
        const editionData = await editionRes.json();

        pages = editionData.number_of_pages || null;
        details = {
          number_of_pages: pages,
          description: editionData.description,
          publishers: editionData.publishers,
          publish_date: editionData.publish_date,
        };
      }
    }

    if (!pages && book.key) {
      const workKey = book.key.replace("/works/", "");
      const workRes = await fetch(
        `https://openlibrary.org/works/${workKey}.json`,
      );

      if (workRes.ok) {
        const workData = await workRes.json();

        if (!pages) {
          pages = workData.number_of_pages || null;
        }

        details = {
          ...details,
          number_of_pages: pages,
          description: details?.description || workData.description,
          subjects: workData.subjects,
          publishers: details?.publishers || workData.publishers,
          publish_date: details?.publish_date || workData.publish_date,
        };
      }
    }

    return details;
  } catch {
    return null;
  }
};

export const useBooksQuery = (searchBooks?: string) => {
  const defaultSearch = "programming";
  const searchTerm = searchBooks?.trim() || defaultSearch;

  return useQuery<BooksToLocalModels[]>({
    queryKey: ["books", searchTerm],
    queryFn: async () => {
      const searchQuery = encodeURIComponent(searchTerm);
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${searchQuery}&fields=key,title,author_name,first_sentence,subtitle,cover_i,isbn,first_publish_year,number_of_pages_median,cover_edition_key`,
      );

      if (!res.ok) {
        throw new Error(`Error fetching books: ${res.statusText}`);
      }

      const data: BooksServerResponse = await res.json();
      const booksWithDetails = await Promise.all(
        data.docs.slice(0, 20).map(async (book: BooksServerModels) => {
          const details = await fetchBookDetails(book);

          return {
            ...book,
            bookDetails: details,
          };
        }),
      );

      const enhancedData = {
        ...data,
        docs: booksWithDetails,
      };

      return BooksToLocalAdapter(enhancedData);
    },
    enabled: true,
  });
};
