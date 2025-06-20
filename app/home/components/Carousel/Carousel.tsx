"use client";
import React from "react";

import BookCard from "./components/Card/Card";
import { CarouselContainer, CarouselTitle } from "./styles/Carousel.styles";

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

interface CarouselProps {
  books: Book[];
  title?: string;
}

const Carousel: React.FC<CarouselProps> = ({ books, title }) => {
  return (
    <div>
      {title && <CarouselTitle>{title}</CarouselTitle>}
      <CarouselContainer>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </CarouselContainer>
    </div>
  );
};

export default Carousel;
