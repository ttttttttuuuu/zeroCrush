"use client";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../config/translations";

export default function AboutPage() {
  const { currentLang } = useLanguage();
  const t = (key) => getTranslation(currentLang, key);

  return (
    <Container maxWidth="lg" sx={{ py: 12, mt: 8 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {t("about.title")}
      </Typography>
      {/* 其他内容 */}
    </Container>
  );
}
