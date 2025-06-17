import { ThemeSwitch } from '@/components/theme/theme-switch';
import { Badge } from '@heroui/badge';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Logo, NavLink } from './styles/Header.styles';

function Header() {
  const itemCount = 5; // Replace with actual cart item count logic
  return (
    <Navbar>
      <NavbarBrand>
        <Logo href="/">📚 BookStore</Logo>
      </NavbarBrand>
      <NavbarContent>
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
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
