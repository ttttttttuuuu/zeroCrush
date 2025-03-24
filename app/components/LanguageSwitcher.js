"use client";
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(Select)(({ theme }) => ({
  color: "black",
  ".MuiSelect-icon": {
    color: "black",
  },
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      border: "1px solid rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid rgba(255, 255, 255, 0.7)",
    },
  },
  minWidth: "60px",
  height: "40px",
}));

const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&.Mui-selected": {
    backgroundColor: "#e3f2fd",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
});

const languages = {
  "zh-CN": "简",
  "zh-TW": "繁",
  en: "Eng",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isChanging, setIsChanging] = useState(false);

  // 从当前路径获取语言
  const currentLang = pathname.split("/")[1] || "zh-CN";

  const handleChange = async (event) => {
    if (isChanging) return;

    try {
      setIsChanging(true);
      const newLang = event.target.value;

      // 获取当前路径的其余部分
      const pathSegments = pathname.split("/").slice(2);
      const newPath = `/${newLang}${
        pathSegments.length ? "/" + pathSegments.join("/") : ""
      }`;

      // 导航到新路径
      router.push(newPath);
    } catch (error) {
      console.error("Language change failed:", error);
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <StyledSelect
      value={currentLang}
      onChange={handleChange}
      disabled={isChanging}
      sx={{
        fontSize: "0.875rem",
        fontWeight: 500,
      }}
    >
      {Object.entries(languages).map(([code, name]) => (
        <StyledMenuItem key={code} value={code}>
          {name}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
}
