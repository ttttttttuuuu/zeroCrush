"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@/config/theme";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Providers({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            position: "relative",
            overflow: "auto",
          }}
        >
          {children}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
