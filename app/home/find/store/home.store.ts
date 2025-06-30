import { createStore, useStore } from "zustand";

export type IStoreHome = {
};

export type IStoreHomeState = IStoreHome & {
};

export const homeStore = createStore<IStoreHomeState>((set) => ({
}));

export const useHomeStore = <T>(selector: (store: IStoreHomeState) => T): T => {
  return useStore(homeStore, selector);
};
