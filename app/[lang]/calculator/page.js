"use client";
import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Alert,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import InfoIcon from "@mui/icons-material/Info";
import CarbonCalculator from "@/components/CarbonCalculator";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CalculatorPage() {
  const { currentLang } = useLanguage();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handlePremiumFeature = () => {
    setShowLoginPrompt(true);
    // 3秒后隐藏提示
    setTimeout(() => setShowLoginPrompt(false), 3000);
  };

  return (
    <Box sx={{ bgcolor: "#F8F9FA", pt: 8 }}>
      {/* 顶部横幅 */}
      <Box
        sx={{
          bgcolor: "#1C1C1C",
          color: "white",
          py: 6,
          mb: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom>
            碳排放计算器
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            精确计算您的碳足迹，助力可持续发展
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {showLoginPrompt && (
          <Alert
            severity="info"
            sx={{ mb: 3 }}
            onClose={() => setShowLoginPrompt(false)}
          >
            请登录以使用高级功能
          </Alert>
        )}

        <Grid container spacing={4}>
          {/* 基础计算器 */}
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                border: "1px solid rgba(0, 0, 0, 0.05)",
              }}
            >
              <Typography variant="h5" gutterBottom>
                基础碳排放计算
              </Typography>
              <CarbonCalculator />
            </Paper>
          </Grid>

          {/* 高级功能区域 */}
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                border: "1px solid rgba(0, 0, 0, 0.05)",
                bgcolor: "rgba(0, 0, 0, 0.02)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Typography variant="h5" sx={{ flex: 1 }}>
                  高级功能
                  <Tooltip title="更详细的碳排放分析和预测功能">
                    <IconButton size="small" sx={{ ml: 1 }}>
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Typography>
                <LockIcon sx={{ color: "text.secondary" }} />
              </Box>

              <Grid container spacing={3}>
                {/* 高级功能卡片 */}
                {[
                  {
                    title: "详细排放分析",
                    description: "深入分析各排放源的具体贡献和趋势",
                    comingSoon: true,
                  },
                  {
                    title: "减排建议",
                    description: "基于您的排放数据提供个性化的减排建议",
                    comingSoon: true,
                  },
                  {
                    title: "历史数据追踪",
                    description: "查看和分析历史排放数据",
                    comingSoon: true,
                  },
                  {
                    title: "排放预测",
                    description: "使用AI技术预测未来排放趋势",
                    comingSoon: true,
                  },
                ].map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        height: "100%",
                        border: "1px dashed rgba(0, 0, 0, 0.1)",
                        bgcolor: "background.paper",
                        opacity: 0.7,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </Box>
                      <Box sx={{ pt: 2 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          fullWidth
                          startIcon={<LockIcon />}
                          onClick={handlePremiumFeature}
                          sx={{
                            opacity: 0.7,
                            height: 36,
                          }}
                        >
                          即将推出
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
