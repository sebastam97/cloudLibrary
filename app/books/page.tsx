import type { Metadata } from "next";

import Books from "./pages/Books";

export const metadata: Metadata = {
  title: "Iniciar Sesión | BookStore",
  description:
    "Inicia sesión para acceder a tu cuenta y disfrutar de nuestros libros.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <Books />;
}
