"use client";

import { BookCardContainer } from "./styles/BookCard.styles";

interface Book {
  id: string | number;
  title: string;
  // ...otros campos
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => (
  <BookCardContainer>
    <span style={{ fontWeight: 600 }}>{book.title}</span>
  </BookCardContainer>
);

export default BookCard;
