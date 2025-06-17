import { LinkVariantProps } from "@heroui/theme";
import React, { useMemo } from "react";
import { BsCart3 } from "react-icons/bs";

export interface MenuItem {
  label: string;
  href: string;
  badge?: number;
  color?: LinkVariantProps["color"];
  icon?: React.ReactNode;
}

export function useMenuItemsHook() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: "Inicio", href: "/" },
      { label: "Libros", href: "/books" },
      {
        label: "Carrito",
        href: "/cart",
        badge: 5,
        icon: <BsCart3 />,
      },
    ],
    [],
  );

  return {
    menuItems,
    isMenuOpen,
    setIsMenuOpen,
  };
}
