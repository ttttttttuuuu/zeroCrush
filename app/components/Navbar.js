"use client";
// ... existing code ...

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { currentLang } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);

  // 导航项配置
  const navItems = [
    { label: "首页", path: `/${currentLang}` },
    { label: "碳计算器", path: `/${currentLang}/calculator` },
    { label: "碳交易市场", path: `/${currentLang}/carbon-market` },
    { label: "关于我们", path: `/${currentLang}/about` },
    { label: "计算方法", path: `/${currentLang}/methodology` },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    router.push(path);
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.95)",
        // bgcolor: "#d1e6db",
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* 左侧 Logo */}
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1.5rem",
              fontFamily: '"Poppins", sans-serif',
            }}
            onClick={() => handleNavigation(`/${currentLang}`)}
          >
            ZeroCrush
          </Typography>

          {/* 右侧导航和语言选择器 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* 移动端菜单 */}
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="primary"
                  aria-label="menu"
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    "& .MuiPaper-root": {
                      bgcolor: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      borderRadius: 2,
                      mt: 1,
                    },
                  }}
                >
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      sx={{
                        color:
                          pathname === item.path
                            ? "primary.main"
                            : "text.primary",
                        fontWeight: pathname === item.path ? "bold" : "normal",
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              // 桌面端导航按钮
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      sx={{
                        mx: 1,
                        color:
                          pathname === item.path
                            ? "primary.main"
                            : "text.primary",
                        fontWeight: pathname === item.path ? "bold" : "normal",
                        "&:hover": {
                          bgcolor: "rgba(52, 168, 83, 0.05)",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </>
            )}

            {/* 语言选择器 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <LanguageSwitcher />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
