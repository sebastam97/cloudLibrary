import React from 'react';
import {
  CartBadge,
  CartContainer,
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  NavLinks
} from './styles/Header.styles';

function Header() {
  const itemCount = 0; // Replace with actual cart item count logic
  return (
    <HeaderContainer>
      <Nav>
        <Logo href="/">📚 BookStore</Logo>
        <NavLinks>
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/books">Libros</NavLink>
          <CartContainer>
            <NavLink href="/cart">🛒 Carrito</NavLink>
            {itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
          </CartContainer>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
