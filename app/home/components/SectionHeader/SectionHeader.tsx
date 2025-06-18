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
            className="bg-white text-blue-600 hover:bg-gray-100"
            color="primary"
            href="/books"
            size="lg"
            variant="solid"
          >
            Explorar Libros
          </Button>
          <Button
            as={Link}
            className="border-white text-white hover:bg-white hover:text-blue-600"
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
