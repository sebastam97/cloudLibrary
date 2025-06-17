"use client";

import { Badge } from "@heroui/badge";
import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import React from "react";

import { Logo, NavbarContentCustom, NavLink } from "./styles/Header.styles";

import { ThemeSwitch } from "@/components/theme/theme-switch";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const itemCount = 5; // Replace with actual cart item count logic

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Logo href="/">📚 BookStore</Logo>
      </NavbarBrand>
      <NavbarContentCustom>
        <NavbarItem>
          <NavLink href="/">Inicio</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/books">Libros</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/cart">
            <Badge
              color="danger"
              content={itemCount}
              isInvisible={true}
              shape="circle"
            >
              🛒 Carrito
            </Badge>
          </NavLink>
        </NavbarItem>
        <ThemeSwitch />
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContentCustom>
    </Navbar>
  );
}

export default Header;
