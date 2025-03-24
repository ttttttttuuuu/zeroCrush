"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../config/translations";

export default function Footer() {
  const { currentLang } = useLanguage();
  const t = (key) => getTranslation(currentLang, key);
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const updateVisitorCount = async () => {
      try {
        // 首先获取当前计数
        const getResponse = await fetch("/api/visitor-count");
        if (!getResponse.ok) throw new Error("Failed to fetch count");

        // 增加访问计数
        const postResponse = await fetch("/api/visitor-count", {
          method: "POST",
        });
        if (!postResponse.ok) throw new Error("Failed to update count");

        const data = await postResponse.json();

        if (isMounted) {
          setVisitorCount(data.count);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error with visitor count:", error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    // 只在客户端首次加载时更新访问计数
    if (typeof window !== "undefined") {
      updateVisitorCount();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const getVisitorText = () => {
    switch (currentLang) {
      case "en":
        return "Visitors: ";
      case "zh-TW":
        return "訪問人數: ";
      default:
        return "访问人数: ";
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1C1C1C",
        color: "white",
        pt: 6,
        pb: 4,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo 和简介 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: "#34A853" }}>
              ZeroCrush
            </Typography>
            <Typography variant="body2" sx={{ color: "#A0A0A0", mb: 3 }}>
              {t("footer.description")}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                href="https://github.com"
                target="_blank"
                sx={{
                  color: "#A0A0A0",
                  "&:hover": { color: "#34A853" },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  color: "#A0A0A0",
                  "&:hover": { color: "#34A853" },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{
                  color: "#A0A0A0",
                  "&:hover": { color: "#34A853" },
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>

          {/* 快速链接 */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
              {t("footer.quickLinks")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                { text: t("footer.about"), href: "/about" },
                { text: t("footer.methodology"), href: "/methodology" },
                { text: t("footer.calculator"), href: "/" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    color: "#A0A0A0",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#34A853",
                      textDecoration: "none",
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* 联系方式 */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
              {t("footer.contact")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ color: "#A0A0A0" }}>
                Email: contact@carboncalculator.com
              </Typography>
              {/* <Typography
                variant="body2"
                sx={{
                  color: "#A0A0A0",
                  textAlign: "center",
                  mt: 2,
                }}
              >
                {getVisitorText()}
                {isLoading ? "..." : visitorCount}
              </Typography> */}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* 版权信息 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#A0A0A0" }}>
            © {new Date().getFullYear()} ZeroCrush. {t("footer.copyright")}
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="/privacy"
              sx={{
                color: "#A0A0A0",
                textDecoration: "none",
                "&:hover": { color: "#34A853" },
              }}
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              sx={{
                color: "#A0A0A0",
                textDecoration: "none",
                "&:hover": { color: "#34A853" },
              }}
            >
              {t("footer.terms")}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
