"use client";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import {
  Science,
  Calculate,
  Timeline,
  CheckCircle,
  MenuBook,
  Assignment,
  BarChart,
  EmojiObjects,
} from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Methodology() {
  const { currentLang } = useLanguage();

  // 资料来源数据
  const references = [
    {
      title: "IPCC 气候变化报告",
      link: "https://www.ipcc.ch/report/ar6/wg1/",
      description: "政府间气候变化专门委员会权威报告",
      year: "2021",
    },
    {
      title: "GHG Protocol",
      link: "https://ghgprotocol.org/corporate-standard",
      description: "温室气体核算体系企业标准",
      year: "2023",
    },
    {
      title: "ISO 14064-1:2018",
      link: "https://www.iso.org/standard/66453.html",
      description: "温室气体核算与报告国际标准",
      year: "2018",
    },
    {
      title: "国家发改委气候司",
      link: "https://www.ndrc.gov.cn/",
      description: "中国温室气体自愿减排方法学",
      year: "2023",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F8F9FA", pt: 8 }}>
      {/* 顶部横幅 */}
      <Box
        sx={{
          bgcolor: "#1C1C1C",
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(52, 168, 83, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                碳排放计算方法论
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontWeight: 400,
                }}
              >
                基于国际标准的科学计算方法，为您提供准确可靠的碳足迹评估
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Science
                sx={{ fontSize: 160, color: "rgba(255, 255, 255, 0.1)" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* 左侧：主要内容 */}
          <Grid item xs={12} md={8}>
            {/* 计算标准 */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 2,
                border: "1px solid rgba(0, 0, 0, 0.05)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Assignment
                  sx={{ mr: 2, color: "primary.main", fontSize: 30 }}
                />
                <Typography variant="h4">计算标准</Typography>
              </Box>
              <List>
                {[
                  "ISO 14064-1:2018 温室气体核算与报告标准",
                  "GHG Protocol（温室气体核算体系）企业核算与报告标准",
                  "IPCC 国家温室气体清单指南",
                  "中国温室气体自愿减排交易体系",
                ].map((standard, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={standard}
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 500,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* 计算方法 */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 2,
                border: "1px solid rgba(0, 0, 0, 0.05)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Calculate
                  sx={{ mr: 2, color: "primary.main", fontSize: 30 }}
                />
                <Typography variant="h4">计算方法</Typography>
              </Box>
              <Typography variant="h6" gutterBottom color="primary.main">
                基本公式
              </Typography>
              <Paper
                sx={{
                  p: 3,
                  mb: 4,
                  bgcolor: "rgba(52, 168, 83, 0.05)",
                  border: "1px dashed rgba(52, 168, 83, 0.5)",
                  borderRadius: 2,
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1.5rem",
                    color: "primary.main",
                  }}
                >
                  E = Σ(AD × EF × GWP)
                </Typography>
              </Paper>
              <Grid container spacing={3}>
                {[
                  { term: "E", desc: "温室气体排放量（tCO2e）" },
                  { term: "AD", desc: "活动数据（如能源消耗量）" },
                  { term: "EF", desc: "排放因子" },
                  { term: "GWP", desc: "全球变暖潜势值" },
                ].map((item) => (
                  <Grid item xs={12} sm={6} key={item.term}>
                    <Card elevation={0} sx={{ bgcolor: "background.paper" }}>
                      <CardContent>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Chip
                            label={item.term}
                            color="primary"
                            sx={{ mr: 2, fontWeight: "bold" }}
                          />
                          <Typography>{item.desc}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* 右侧：补充信息 */}
          <Grid item xs={12} md={4}>
            {/* 排放因子 */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 2,
                border: "1px solid rgba(0, 0, 0, 0.05)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <BarChart sx={{ mr: 2, color: "primary.main", fontSize: 30 }} />
                <Typography variant="h5">排放因子</Typography>
              </Box>
              <List>
                {[
                  { type: "电力", value: "0.5810 kgCO2e/kWh" },
                  { type: "天然气", value: "2.1622 kgCO2e/m³" },
                  { type: "汽油", value: "2.3519 kgCO2e/L" },
                  { type: "柴油", value: "2.7147 kgCO2e/L" },
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={item.type}
                      secondary={item.value}
                      sx={{
                        "& .MuiListItemText-primary": { fontWeight: 500 },
                        "& .MuiListItemText-secondary": {
                          color: "primary.main",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* 参考文献 */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                border: "1px solid rgba(0, 0, 0, 0.05)",
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "box-shadow 0.3s ease-in-out",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <MenuBook sx={{ mr: 2, color: "primary.main", fontSize: 30 }} />
                <Typography variant="h5">资料来源</Typography>
              </Box>
              <List sx={{ p: 0 }}>
                {references.map((ref, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      mb: 2,
                      overflow: "hidden",
                      border: "1px solid rgba(0,0,0,0.05)",
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "rgba(52, 168, 83, 0.05)",
                      },
                    }}
                  >
                    <Box
                      component="a"
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "block",
                        p: 2,
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: "primary.main",
                            flex: 1,
                          }}
                        >
                          {ref.title}
                        </Typography>
                        <Chip
                          label={ref.year}
                          size="small"
                          sx={{
                            ml: 1,
                            bgcolor: "rgba(52, 168, 83, 0.1)",
                            color: "primary.main",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {ref.description}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
