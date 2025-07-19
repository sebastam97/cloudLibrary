export type BookDetailsServerModel = {
  number_of_pages?: number;
  description?: string | { value: string };
  subjects?: string[];
  publishers?: string[];
  publish_date?: string;
};

export type BooksServerModels = {
  cover_edition_key?: string;
  key: string;
  title: string;
  author_name?: string[];
  first_sentence?: string | string[];
  subtitle?: string;
  cover_i?: number;
  isbn?: string[];
  first_publish_year?: number;
  number_of_pages_median?: number;
  bookDetails?: BookDetailsServerModel | null;
};

export type BooksServerResponse = {
  docs: BooksServerModels[];
  numFound: number;
  offset: number;
};
