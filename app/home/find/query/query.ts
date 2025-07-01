import { useQuery } from "@tanstack/react-query";

import { BooksFindToLocalAdapter } from "../adapters/local/homeFind.local-adapter";
import { BooksFindToLocalModels } from "../models/local/homeFind.local-models";
import { BooksFindServerResponse } from "../models/server/homeFind.server-models";

const fetchBookDetails = async (book: any) => {
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

export const useBooksQuery = (query: string, category?: string) =>
  useQuery<BooksFindToLocalModels[]>({
    queryKey: ["books", query, category],
    queryFn: async () => {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`,
      );

      if (!res.ok) {
        throw new Error(`Error fetching books: ${res.statusText}`);
      }
      const data: BooksFindServerResponse = await res.json();
      const booksWithDetails = await Promise.all(
        data.docs.slice(0, 10).map(async (book) => {
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

      return BooksFindToLocalAdapter(enhancedData);
    },
    enabled: !!query,
  });
