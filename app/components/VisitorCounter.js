"use client";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Visibility } from "@mui/icons-material";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // 从localStorage获取当前计数
    const currentCount = parseInt(localStorage.getItem("visitorCount") || "0");

    // 增加访问计数
    const newCount = currentCount + 1;
    localStorage.setItem("visitorCount", newCount.toString());
    setVisitorCount(newCount);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        padding: "8px 16px",
        borderRadius: "20px",
        background: "rgba(52, 168, 83, 0.9)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: 1,
        zIndex: 1000,
      }}
    >
      <Visibility sx={{ color: "white" }} />
      <Typography
        sx={{
          color: "white",
          fontWeight: 500,
        }}
      >
        访问人数：{visitorCount}
      </Typography>
    </Box>
  );
}
