import { Link } from "@heroui/link";

import {
  Copyright,
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  PaymentIcon,
  PaymentMethods,
  SocialLink,
  SocialLinks,
} from "./styles/Footer.styles";

function Footer() {
  return (
    <div>
      <FooterContainer>
        <FooterContent>
          <FooterGrid>
            <FooterSection>
              <h3>📚 BookStore</h3>
              <p>
                Tu librería online de confianza. Descubre miles de títulos,
                desde bestsellers hasta joyas literarias ocultas. Llevamos la
                mejor literatura directamente a tu puerta.
              </p>
              <SocialLinks>
                <SocialLink aria-label="Facebook" href="#">
                  📘
                </SocialLink>
                <SocialLink aria-label="Twitter" href="#">
                  🐦
                </SocialLink>
                <SocialLink aria-label="Instagram" href="#">
                  📷
                </SocialLink>
                <SocialLink aria-label="YouTube" href="#">
                  📺
                </SocialLink>
              </SocialLinks>
            </FooterSection>

            <FooterSection>
              <h3>Explorar</h3>
              <ul>
                <li>
                  <Link href="/books">Todos los Libros</Link>
                </li>
                <li>
                  <Link href="/books?category=bestsellers">Bestsellers</Link>
                </li>
                <li>
                  <Link href="/books?category=nuevos">Novedades</Link>
                </li>
                <li>
                  <Link href="/books?category=ofertas">Ofertas</Link>
                </li>
                <li>
                  <Link href="/books?category=clasicos">Clásicos</Link>
                </li>
              </ul>
            </FooterSection>

            <FooterSection>
              <h3>Categorías</h3>
              <ul>
                <li>
                  <Link href="/books?category=ficcion">Ficción</Link>
                </li>
                <li>
                  <Link href="/books?category=no-ficcion">No Ficción</Link>
                </li>
                <li>
                  <Link href="/books?category=romance">Romance</Link>
                </li>
                <li>
                  <Link href="/books?category=misterio">Misterio</Link>
                </li>
                <li>
                  <Link href="/books?category=ciencia">Ciencia</Link>
                </li>
              </ul>
            </FooterSection>

            <FooterSection>
              <h3>Ayuda</h3>
              <ul>
                <li>
                  <Link href="/help/faq">Preguntas Frecuentes</Link>
                </li>
                <li>
                  <Link href="/help/shipping">Información de Envío</Link>
                </li>
                <li>
                  <Link href="/help/returns">Devoluciones</Link>
                </li>
                <li>
                  <Link href="/help/contact">Contacto</Link>
                </li>
                <li>
                  <Link href="/help/support">Soporte Técnico</Link>
                </li>
              </ul>
            </FooterSection>

            <FooterSection>
              <h3>Mi Cuenta</h3>
              <ul>
                <li>
                  <Link href="/auth/login">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link href="/auth/register">Crear Cuenta</Link>
                </li>
                <li>
                  <Link href="/profile">Mi Perfil</Link>
                </li>
                <li>
                  <Link href="/orders">Mis Pedidos</Link>
                </li>
                <li>
                  <Link href="/wishlist">Lista de Deseos</Link>
                </li>
              </ul>
            </FooterSection>

            <FooterSection>
              <h3>Legal</h3>
              <ul>
                <li>
                  <Link href="/legal/privacy">Política de Privacidad</Link>
                </li>
                <li>
                  <Link href="/legal/terms">Términos y Condiciones</Link>
                </li>
                <li>
                  <Link href="/legal/cookies">Política de Cookies</Link>
                </li>
                <li>
                  <Link href="/legal/refunds">Política de Reembolsos</Link>
                </li>
              </ul>
            </FooterSection>
          </FooterGrid>

          <FooterBottom>
            <Copyright>
              &copy; 2024 BookStore. Todos los derechos reservados.
            </Copyright>
            <PaymentMethods>
              <span style={{ color: "#9ca3af", marginRight: "12px" }}>
                Aceptamos:
              </span>
              <PaymentIcon>VISA</PaymentIcon>
              <PaymentIcon>MC</PaymentIcon>
              <PaymentIcon>AMEX</PaymentIcon>
              <PaymentIcon>PayPal</PaymentIcon>
            </PaymentMethods>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>
    </div>
  );
}

export default Footer;
