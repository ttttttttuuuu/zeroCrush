"use client";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import Image from "next/image";
import heroImage from "../img/hero.jpg";
import {
  ArrowForward,
  BarChart,
  CloudDone,
  EmojiNature,
} from "@mui/icons-material";

export default function Hero() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        position: "relative",
        // overflow: "hidden",
      }}
    >
      {/* 装饰背景 */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          background:
            "radial-gradient(circle at 70% 50%, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0) 70%)",
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Typography
                component="h1"
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  background:
                    "linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  mb: 3,
                }}
              >
                ZeroCrush
                <br />
                智能碳中和平台
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                帮助企业实现碳中和目标，推动可持续发展
                打造智能化、数字化的ESG管理解决方案
              </Typography>

              {/* 特点展示 */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  { icon: <BarChart />, text: "数据分析" },
                  { icon: <CloudDone />, text: "智能监控" },
                  { icon: <EmojiNature />, text: "绿色发展" },
                ].map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: "center",
                        bgcolor: "rgba(255, 255, 255, 0.7)",
                        borderRadius: 2,
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          bgcolor: "rgba(255, 255, 255, 0.9)",
                        },
                      }}
                    >
                      <Box sx={{ color: "primary.main", mb: 1 }}>
                        {item.icon}
                      </Box>
                      <Typography variant="body1" fontWeight="medium">
                        {item.text}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    bgcolor: "#2E7D32",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "#1B5E20",
                    },
                  }}
                >
                  开始使用
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "#2E7D32",
                    color: "#2E7D32",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "#1B5E20",
                      bgcolor: "rgba(46, 125, 50, 0.1)",
                    },
                  }}
                >
                  了解更多
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  right: -20,
                  bottom: -20,
                  left: -20,
                  background:
                    "radial-gradient(circle at center, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0) 70%)",
                  borderRadius: "50%",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "perspective(1000px) rotateY(0deg)",
                  },
                }}
              >
                <Image
                  src={heroImage}
                  alt="碳中和示意图"
                  width={600}
                  height={600}
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                  priority
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
