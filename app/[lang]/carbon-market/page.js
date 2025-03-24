"use client";
import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  ShowChart,
  Assessment,
  Timeline,
} from "@mui/icons-material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

// 模拟市场数据
const marketData = [
  { date: "2024-01", price: 45.2, volume: 1200 },
  { date: "2024-02", price: 47.8, volume: 1500 },
  { date: "2024-03", price: 46.5, volume: 1300 },
  { date: "2024-04", price: 49.2, volume: 1800 },
  { date: "2024-05", price: 48.7, volume: 1600 },
  { date: "2024-06", price: 51.3, volume: 2000 },
];

// 模拟交易数据
const tradingData = [
  { id: 1, type: "全国碳市场", price: 49.8, change: "+2.3%", volume: 15000 },
  { id: 2, type: "北京碳市场", price: 45.2, change: "-1.2%", volume: 8000 },
  { id: 3, type: "上海碳市场", price: 47.5, change: "+1.8%", volume: 12000 },
  { id: 4, type: "广东碳市场", price: 46.9, change: "+0.5%", volume: 10000 },
];

export default function CarbonMarket() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 市场概览 */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        碳交易市场
      </Typography>

      <Grid container spacing={3}>
        {/* 市场指标卡片 */}
        {[
          {
            title: "当前碳价",
            value: "¥49.80",
            change: "+2.3%",
            icon: <ShowChart color="primary" />,
          },
          {
            title: "交易量",
            value: "15,000吨",
            change: "+15%",
            icon: <Assessment color="primary" />,
          },
          {
            title: "市场规模",
            value: "¥7.5亿",
            change: "+8%",
            icon: <Timeline color="primary" />,
          },
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: "rgba(255,255,255,0.9)",
                borderRadius: 4,
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography color="text.secondary">{item.title}</Typography>
                {item.icon}
              </Box>
              <Typography variant="h4" gutterBottom>
                {item.value}
              </Typography>
              <Chip
                label={item.change}
                color={item.change.startsWith("+") ? "success" : "error"}
                size="small"
                icon={
                  item.change.startsWith("+") ? (
                    <TrendingUp />
                  ) : (
                    <TrendingDown />
                  )
                }
              />
            </Paper>
          </Grid>
        ))}

        {/* 价格趋势图 */}
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: "rgba(255,255,255,0.9)",
              borderRadius: 4,
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              碳价走势
            </Typography>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#34A853" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#34A853" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#34A853"
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* 交易数据表格 */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: "rgba(255,255,255,0.9)",
              borderRadius: 4,
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              交易数据
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>交易市场</TableCell>
                    <TableCell align="right">价格 (元/吨)</TableCell>
                    <TableCell align="right">涨跌幅</TableCell>
                    <TableCell align="right">成交量 (吨)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tradingData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.type}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">
                        <Chip
                          label={row.change}
                          size="small"
                          color={
                            row.change.startsWith("+") ? "success" : "error"
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        {row.volume.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* 市场资讯 */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: "rgba(255,255,255,0.9)",
              borderRadius: 4,
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              市场资讯
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { title: "全国碳市场交易额突破100亿元", date: "2024-01-15" },
                { title: "新能源企业碳配额交易活跃", date: "2024-01-14" },
                { title: '碳市场助力实现"双碳"目标', date: "2024-01-13" },
              ].map((news, index) => (
                <Card
                  key={index}
                  elevation={0}
                  sx={{ bgcolor: "rgba(52, 168, 83, 0.05)" }}
                >
                  <CardContent>
                    <Typography variant="subtitle2" gutterBottom>
                      {news.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {news.date}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
