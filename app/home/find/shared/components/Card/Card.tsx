"use client";

import { Button } from "@heroui/button";
import { BsBook, BsClock, BsEye } from "react-icons/bs";

import { useCardHoverAndImage } from "../../../components/Carousel/hooks/useCardHoverAndImage/useCardHoverAndImage";

import {
  CardAuthorStyled,
  CardBodySpacer,
  CardBodyStyled,
  CardChipStyled,
  CardContainer,
  CardDescriptionStyled,
  CardFooterButtonHero,
  CardFooterStyled,
  CardHeaderStyled,
  CardImageStyled,
  CardImageWrapper,
  CardOverlay,
  CardPrice,
  CardPublishedDateStyled,
  CardStarsStyled,
  CardStatStyled,
  CardStatsStyled,
  CardTitleStyled,
} from "./styles/Card.styles";

interface Book {
  id: string | number;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isbn: string;
  publishedDate: string;
  pages: number;
}

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  const { isHovered, setIsHovered, imageLoaded } = useCardHoverAndImage();

  const renderStars = () => <BsBook key={0} size={14} />;

  return (
    <CardContainer
      $imageLoaded={imageLoaded}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeaderStyled>
        <div>
          <CardChipStyled $hovered={isHovered}>
            <span>📚</span>
            {book.category}
          </CardChipStyled>
        </div>
      </CardHeaderStyled>
      <CardImageWrapper>
        <CardImageStyled
          $hovered={isHovered}
          alt={book.title}
          src={book.image}
        />
        <CardOverlay $active={isHovered} />
        <CardPrice $hovered={isHovered}>${book.price.toFixed(2)}</CardPrice>
      </CardImageWrapper>
      <CardBodyStyled>
        <CardStarsStyled>
          {renderStars()}
          <span>({book.rating})</span>
        </CardStarsStyled>
        <CardStatsStyled>
          <CardStatStyled>
            <BsBook size={12} />
            {typeof book.pages === "number" && book.pages > 0
              ? `${book.pages}p`
              : "Desconocido"}
          </CardStatStyled>
          <CardStatStyled>
            <BsClock size={12} />
            {typeof book.pages === "number" && book.pages > 0
              ? `${Math.ceil(book.pages / 250)}h`
              : "-"}
          </CardStatStyled>
        </CardStatsStyled>
        <CardTitleStyled>{book.title}</CardTitleStyled>
        <CardAuthorStyled>por {book.author}</CardAuthorStyled>
        <CardPublishedDateStyled>
          Publicado: {book.publishedDate}
        </CardPublishedDateStyled>
        <CardDescriptionStyled>{book.description}</CardDescriptionStyled>
        <CardBodySpacer />
      </CardBodyStyled>

      <CardFooterStyled>
        <CardFooterButtonHero>
          <Button color="primary" fullWidth={true} size="md" variant="solid">
            <BsEye size={18} />
            Ver
          </Button>
        </CardFooterButtonHero>
      </CardFooterStyled>
    </CardContainer>
  );
}
