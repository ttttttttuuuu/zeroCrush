"use client";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/config/translations";

export default function Page() {
  const { currentLang } = useLanguage();
  const t = (key) => getTranslation(currentLang, key);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, mt: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          {t("about.title")}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              height: "100%",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
              我们的使命
            </Typography>
            <Typography>
              为企业和个人提供专业的碳排放计算和管理解决方案，助力实现碳中和目标。
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              height: "100%",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
              我们的愿景
            </Typography>
            <Typography>
              成为全球领先的碳排放管理平台，推动可持续发展。
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
