import { createStore, useStore } from "zustand";

export type IStoreBooks = {
  searchBooks?: string;
};

export type IStoreBooksState = IStoreBooks & {
  setBooks: (searchBooks: string) => void;
};

export const booksStore = createStore<IStoreBooksState>((set) => ({
  searchBooks: "",
  setBooks: (searchBooks) => set(() => ({ searchBooks })),
}));

export const useBooksStore = <T>(
  selector: (store: IStoreBooksState) => T,
): T => {
  return useStore(booksStore, selector);
};
