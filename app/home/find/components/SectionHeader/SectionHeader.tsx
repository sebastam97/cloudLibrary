import { Button } from "@heroui/button";
import Link from "next/link";

import {
  ButtonContainer,
  Container,
  Section,
  Subtitle,
  Title,
} from "./styles/SectionHeader.styles";

function SectionHeader() {
  return (
    <Section>
      <Container>
        <Title>Descubre tu próxima gran lectura</Title>
        <Subtitle>
          Miles de libros esperándote. Encuentra, compra y disfruta de la mejor
          literatura desde la comodidad de tu hogar.
        </Subtitle>
        <ButtonContainer>
          <Button
            as={Link}
            color="primary"
            href="/books"
            size="lg"
            variant="solid"
          >
            Explorar Libros
          </Button>
          <Button
            as={Link}
            color="primary"
            href="/auth/login"
            size="lg"
            variant="bordered"
          >
            Crear Cuenta
          </Button>
        </ButtonContainer>
      </Container>
    </Section>
  );
}

export default SectionHeader;
