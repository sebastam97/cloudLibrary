"use client";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Solo crear StyleSheet en el servidor o durante el renderizado inicial
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    styledComponentsStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  // En el cliente, simplemente renderizar los children
  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  // En el servidor, usar StyleSheetManager
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
