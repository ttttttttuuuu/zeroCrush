"use client";
import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";

// 定义排放因子
const EMISSION_FACTORS = {
  electricity: 0.581, // kgCO2e/kWh
  gas: 2.1622, // kgCO2e/m³
  water: 0.344, // kgCO2e/m³
  waste: 2.5, // kgCO2e/kg
};

// 定义颜色常量
const CATEGORY_COLORS = {
  electricity: "#34A853",
  gas: "#4285F4",
  water: "#FBBC05",
  waste: "#EA4335",
};

// 简化的翻译对象，只保留图表相关的翻译
const chartTranslations = {
  "zh-CN": {
    electricity: "电力碳排放 (kgCO2e)",
    gas: "天然气碳排放 (kgCO2e)",
    water: "用水碳排放 (kgCO2e)",
    waste: "废弃物碳排放 (kgCO2e)",
    calculate: "计算碳排放",
    title: "碳排放计算器",
    subtitle: "输入您的资源使用数据来计算碳足迹",
    inputElectricity: "电力使用量 (kWh)",
    inputGas: "天然气使用量 (m³)",
    inputWater: "用水量 (m³)",
    inputWaste: "废弃物产生量 (kg)",
    totalEmissions: "总碳排放量",
    kgCO2e: "kgCO2e",
    neutralization: "碳中和分析",
    renewable: "可再生能源",
    offset: "碳补偿",
    reduction: "减排措施",
    remaining: "剩余排放",
  },
  "zh-TW": {
    electricity: "電力碳排放 (kgCO2e)",
    gas: "天然氣碳排放 (kgCO2e)",
    water: "用水碳排放 (kgCO2e)",
    waste: "廢棄物碳排放 (kgCO2e)",
    calculate: "計算碳排放",
    title: "碳排放計算器",
    subtitle: "輸入您的資源使用數據來計算碳足跡",
    inputElectricity: "電力使用量 (kWh)",
    inputGas: "天然氣使用量 (m³)",
    inputWater: "用水量 (m³)",
    inputWaste: "廢棄物產生量 (kg)",
    totalEmissions: "總碳排放量",
    kgCO2e: "kgCO2e",
    neutralization: "碳中和分析",
    renewable: "可再生能源",
    offset: "碳補償",
    reduction: "減排措施",
    remaining: "剩餘排放",
  },
  en: {
    electricity: "Electricity Emissions (kgCO2e)",
    gas: "Gas Emissions (kgCO2e)",
    water: "Water Emissions (kgCO2e)",
    waste: "Waste Emissions (kgCO2e)",
    calculate: "Calculate Emissions",
    title: "Carbon Calculator",
    subtitle:
      "Enter your resource usage data to calculate your carbon footprint",
    inputElectricity: "Electricity Usage (kWh)",
    inputGas: "Gas Usage (m³)",
    inputWater: "Water Usage (m³)",
    inputWaste: "Waste Generation (kg)",
    totalEmissions: "Total Emissions",
    kgCO2e: "kgCO2e",
    neutralization: "Carbon Neutralization Analysis",
    renewable: "Renewable Energy",
    offset: "Carbon Offset",
    reduction: "Reduction Measures",
    remaining: "Remaining Emissions",
  },
};

// 默认数据，确保图表始终显示
const defaultData = [
  { name: "电力使用量 (kWh)", value: 0 },
  { name: "天然气使用量 (m³)", value: 0 },
  { name: "用水量 (m³)", value: 0 },
  { name: "废弃物产生量 (kg)", value: 0 },
];

// 渐变色定义
const gradientColors = {
  electricity: ["#34A853", "#82C596"],
  gas: ["#4285F4", "#7BAAF7"],
  water: ["#FBBC05", "#FDDA6C"],
  waste: ["#EA4335", "#F28B82"],
};

export default function CarbonCalculator() {
  const { currentLang } = useLanguage();
  const [values, setValues] = useState({
    electricity: "",
    gas: "",
    water: "",
    waste: "",
  });
  const [chartData, setChartData] = useState([]);
  const [totalEmissions, setTotalEmissions] = useState(0);

  // 获取当前语言的翻译
  const t = (key) => chartTranslations[currentLang]?.[key] || key;

  // 计算碳排放
  const calculateEmissions = (value, factor) => {
    return Number(value) * factor || 0;
  };

  const handleCalculate = () => {
    // 计算每个类别的碳排放
    const emissions = {
      electricity: calculateEmissions(
        values.electricity,
        EMISSION_FACTORS.electricity
      ),
      gas: calculateEmissions(values.gas, EMISSION_FACTORS.gas),
      water: calculateEmissions(values.water, EMISSION_FACTORS.water),
      waste: calculateEmissions(values.waste, EMISSION_FACTORS.waste),
    };

    // 计算总排放量
    const total = Object.values(emissions).reduce(
      (sum, value) => sum + value,
      0
    );
    setTotalEmissions(total);

    // 创建图表数据
    const newChartData = [
      {
        name: t("electricity"),
        value: Number(emissions.electricity.toFixed(2)),
      },
      {
        name: t("gas"),
        value: Number(emissions.gas.toFixed(2)),
      },
      {
        name: t("water"),
        value: Number(emissions.water.toFixed(2)),
      },
      {
        name: t("waste"),
        value: Number(emissions.waste.toFixed(2)),
      },
    ];
    setChartData(newChartData);
  };

  // 当语言改变时更新图表
  useEffect(() => {
    if (chartData.length > 0) {
      handleCalculate();
    }
  }, [currentLang]);

  const getInputLabel = (key) => {
    const labels = {
      electricity: t("inputElectricity"),
      gas: t("inputGas"),
      water: t("inputWater"),
      waste: t("inputWaste"),
    };
    return labels[key];
  };

  // 自定义 Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Paper
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.95)",
            p: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.05)",
            borderRadius: 2,
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {payload[0].value.toFixed(2)}
          </Typography>
        </Paper>
      );
    }
    return null;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {t("title")}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        {t("subtitle")}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "rgba(255,255,255,0.9)",
              borderRadius: 4,
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <Grid
              container
              spacing={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {Object.keys(values).map((key) => (
                <Grid item key={key}>
                  <TextField
                    fullWidth
                    label={getInputLabel(key)}
                    type="number"
                    value={values[key]}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }))
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />
                </Grid>
              ))}
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleCalculate}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    background:
                      "linear-gradient(45deg, #34A853 30%, #4CAF50 90%)",
                    boxShadow: "0 4px 20px rgba(52, 168, 83, 0.25)",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #2E7D32 30%, #388E3C 90%)",
                    },
                  }}
                >
                  {t("calculate")}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "500px",
              display: "flex",
              flexDirection: "column",
              bgcolor: "rgba(255,255,255,0.9)",
              borderRadius: 4,
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            {totalEmissions > 0 && (
              <Typography
                variant="h6"
                align="center"
                sx={{
                  mb: 2,
                  background: "linear-gradient(45deg, #34A853, #4CAF50)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                }}
              >
                {t("totalEmissions")}: {totalEmissions.toFixed(2)} {t("kgCO2e")}
              </Typography>
            )}
            <Box sx={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData.length > 0 ? chartData : defaultData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <defs>
                    {Object.entries(gradientColors).map(
                      ([key, [color1, color2]], index) => (
                        <linearGradient
                          key={key}
                          id={`gradient-${key}`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor={color1}
                            stopOpacity={1}
                          />
                          <stop
                            offset="100%"
                            stopColor={color2}
                            stopOpacity={1}
                          />
                        </linearGradient>
                      )
                    )}
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(0,0,0,0.1)"
                  />
                  <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    tick={{
                      fontSize: 12,
                      fill: "#666",
                    }}
                  />
                  <YAxis
                    tick={{
                      fontSize: 12,
                      fill: "#666",
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="value"
                    radius={[10, 10, 0, 0]} // 添加圆角
                  >
                    {(chartData.length > 0 ? chartData : defaultData).map(
                      (entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`url(#gradient-${
                            Object.keys(gradientColors)[index]
                          })`}
                          style={{
                            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                          }}
                        />
                      )
                    )}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
