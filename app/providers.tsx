"use client";

import type { ThemeProviderProps } from "next-themes";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@/components/theme/themeConfig/theme";

export interface ProvidersProps {
  children: React.ReactNode;

  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

const ThemedApp = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme === "dark" ? darkTheme : lightTheme;

  if (!mounted) {
    return (
      <StyledThemeProvider theme={lightTheme}>{children}</StyledThemeProvider>
    );
  }

  return (
    <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
  );
};

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <ThemedApp>{children}</ThemedApp>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
