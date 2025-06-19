import { createStore, useStore } from "zustand";

export type IStoreShoppingCart = {
};

export type IStoreShoppingCartState = IStoreShoppingCart & {
};

export const shoppingCartStore = createStore<IStoreShoppingCartState>((set) => ({
}));

export const useShoppingCartStore = <T>(selector: (store: IStoreShoppingCartState) => T): T => {
  return useStore(shoppingCartStore, selector);
};
