"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { Analytics, Timeline, MenuBook, TrendingUp } from "@mui/icons-material";

export default function UpcomingFeatures() {
  const feat = [
    {
      icon: <Analytics sx={{ fontSize: 40, color: "#2196f3" }} />,
      title: "高级数据分析",
      description: "深入分析您的碳排放数据，提供详细的趋势报告和预测分析",
      timeline: "2025年第二季度",
    },
    {
      icon: <Timeline sx={{ fontSize: 40, color: "#4caf50" }} />,
      title: "碳排放追踪",
      description: "实时监控和追踪您的碳排放变化，设置目标并获取达成建议",
      timeline: "2025年第三季度",
    },
    {
      icon: <MenuBook sx={{ fontSize: 40, color: "#ff9800" }} />,
      title: "可持续建议",
      description: "基于您的数据提供个性化的减排建议和可持续发展方案",
      timeline: "2025年第四季度",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "#e91e63" }} />,
      title: "碳信用交易",
      description: "接入碳交易市场，实现碳信用的便捷交易和管理",
      timeline: "2026年第一季度",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#f8f9fa",
        borderRadius: "16px",
        my: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 2,
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          即将推出
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          我们正在开发更多强大的功能，敬请期待
        </Typography>

        <Grid container spacing={4}>
          {feat.map((f, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  transition: "all 0.3s ease",
                  borderRadius: 2,
                  bgcolor: "white",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{f.icon}</Box>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    minHeight: "64px",
                  }}
                >
                  {f.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    minHeight: "80px",
                  }}
                >
                  {f.description}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    display: "inline-block",
                    bgcolor: "rgba(33, 150, 243, 0.1)",
                    color: "#2196f3",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "16px",
                    fontWeight: "medium",
                  }}
                >
                  预计上线: {f.timeline}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
