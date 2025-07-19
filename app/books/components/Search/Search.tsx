"use client";
import { Input } from "@heroui/input";
import { useFormikContext } from "formik";
import { useEffect } from "react";

import { initialsSearchBooksType } from "../../models/local/books.local-model";
import { useBooksStore } from "../../store/books.store";

import { useDebounce } from "./hooks/useDebounce";
import { SearchContainer, SearchIcon } from "./styles/Search.styles";

function Search() {
  const { values, setFieldValue } = useFormikContext<initialsSearchBooksType>();
  const setBooks = useBooksStore((state) => state.setBooks);

  const debouncedSearchTerm = useDebounce(values.search, 500);

  useEffect(() => {
    setBooks(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleInputChange = (value: string) => {
    setFieldValue("search", value);
  };

  const handleClear = () => {
    setFieldValue("search", "");
  };

  return (
    <SearchContainer>
      <Input
        isClearable
        color="primary"
        placeholder="Buscar por título, autor o categoría..."
        radius="full"
        size="lg"
        startContent={<SearchIcon />}
        value={values.search}
        variant="bordered"
        onClear={handleClear}
        onValueChange={handleInputChange}
      />
    </SearchContainer>
  );
}

export default Search;
