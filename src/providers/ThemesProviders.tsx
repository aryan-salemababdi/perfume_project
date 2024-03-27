"use client"
import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/mui/theme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


const cache = createCache({
    key: "my-prefix-key",
  });
  

function ThemesProviders({ children }: { children:ReactNode }) {
    return (
        <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
        </CacheProvider>
        )
  }
  
  export default ThemesProviders;
  