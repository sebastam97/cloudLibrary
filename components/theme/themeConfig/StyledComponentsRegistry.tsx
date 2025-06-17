"use client";
import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/components/theme/themeConfig/theme";

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
