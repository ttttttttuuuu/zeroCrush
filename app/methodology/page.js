"use client";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../config/translations";
import { ExpandMore } from "@mui/icons-material";

export default function MethodologyPage() {
  const { currentLang } = useLanguage();
  const t = (key) => getTranslation(currentLang, key);

  return (
    <Container maxWidth="lg" sx={{ py: 12, mt: 8 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {t("methodology.title")}
      </Typography>
      {/* 其他内容 */}
    </Container>
  );
}
