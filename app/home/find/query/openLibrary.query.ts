import { useQuery } from "@tanstack/react-query";

export const useBooksQuery = (query: string) =>
  useQuery({
    queryKey: ["books", query],
    queryFn: async () => {
      const res = await await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`,
      );
      const data = await res.json();
    },
  });
