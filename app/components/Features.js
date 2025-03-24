"use client";
// ... existing code ...
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { BarChart, Nature, BusinessCenter } from "@mui/icons-material";

export default function Features() {
  const features = [
    {
      icon: <BarChart sx={{ fontSize: 40, color: "#c2ded0" }} />,
      title: "企业碳排放计算",
      description: "基于AI分析供应链数据，精确计算企业碳排放",
    },
    {
      icon: <Nature sx={{ fontSize: 40, color: "#c2ded0" }} />,
      title: "个人碳足迹追踪",
      description: "连接智能家居和交通应用，实时监控个人碳足迹",
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 40, color: "#c2ded0" }} />,
      title: "碳交易市场对接",
      description: "提供碳中和认证，直接对接碳交易市场",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#F5F5F5" }}>
      <Grid container spacing={4} sx={{ px: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                {feature.icon}
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
