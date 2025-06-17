"use client";

import { Badge } from "@heroui/badge";
import { Link } from "@heroui/link";
import { NavbarBrand, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";

import { useMenuItemsHook } from "./hooks/useMenuItemsHooks/useMenuItemsHook";
import {
  IconContainer,
  Logo,
  NavbarContentCustom,
  NavbarCustom,
  NavbarItemCustom,
  NavbarMenuToggleCustom,
  NavLink,
} from "./styles/Header.styles";

import { ThemeSwitch } from "@/components/theme/theme-switch/theme-switch";

function Header() {
  const { isMenuOpen, menuItems, setIsMenuOpen } = useMenuItemsHook();

  return (
    <NavbarCustom onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggleCustom
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      />
      <NavbarBrand>
        <Logo href="/">📚 BookStore</Logo>
      </NavbarBrand>
      <NavbarContentCustom>
        {/* Menú de escritorio */}
        {menuItems.map((item) => (
          <NavbarItemCustom key={item.href}>
            {(item.badge ?? 0) > 0 ? (
              <Badge
                color="danger"
                content={item.badge ?? ""}
                shape="circle"
                variant="solid"
              >
                <NavLink href={item.href}>
                  {item.icon && item.icon}
                  {item.label}
                </NavLink>
              </Badge>
            ) : (
              <NavLink href={item.href}>
                {item.icon && <IconContainer>{item.icon}</IconContainer>}
                {item.label}
              </NavLink>
            )}
          </NavbarItemCustom>
        ))}
      </NavbarContentCustom>
      <ThemeSwitch />

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Badge
              color="danger"
              content={item.badge}
              isInvisible={item.badge === 0}
              shape="circle"
            >
              <Link
                className=""
                color={item.color || "foreground"}
                href={item.href}
                size="lg"
              >
                {item.icon && item.icon} {item.label}
              </Link>{" "}
            </Badge>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarCustom>
  );
}

export default Header;
