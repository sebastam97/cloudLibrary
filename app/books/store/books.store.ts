import { createStore, useStore } from "zustand";

export type IStoreBooks = {
};

export type IStoreBooksState = IStoreBooks & {
};

export const booksStore = createStore<IStoreBooksState>((set) => ({
}));

export const useBooksStore = <T>(selector: (store: IStoreBooksState) => T): T => {
  return useStore(booksStore, selector);
};
