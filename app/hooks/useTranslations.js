const translations = {
  "zh-CN": {
    nav: {
      home: "首页",
      about: "关于我们",
      methodology: "计算方法",
    },
    methodology: {
      title: "专业碳排放评估体系",
      subtitle: "科学、准确、透明的碳足迹计算方法与评估标准",
      cases: "成功案例研究",
      faq: "常见问题",
      updates: "更新日志",
      feedback: "反馈建议",
    },
  },
  "zh-TW": {
    nav: {
      home: "首頁",
      about: "關於我們",
      methodology: "計算方法",
    },
    methodology: {
      title: "專業碳排放評估體系",
      subtitle: "科學、準確、透明的碳足跡計算方法與評估標準",
      cases: "成功案例研究",
      faq: "常見問題",
      updates: "更新日誌",
      feedback: "反饋建議",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      methodology: "Methodology",
    },
    methodology: {
      title: "Professional Carbon Emission Assessment System",
      subtitle:
        "Scientific, Accurate, and Transparent Carbon Footprint Calculation Methods",
      cases: "Success Cases",
      faq: "FAQ",
      updates: "Updates",
      feedback: "Feedback",
    },
  },
};

export function useTranslations(locale) {
  return function t(key) {
    const keys = key.split(".");
    let result = translations[locale];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };
}
