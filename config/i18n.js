export const locales = ["zh-CN", "zh-TW", "en"];
export const defaultLocale = "zh-CN";

// 定义每个语言的显示名称
export const localeLabels = {
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  en: "English",
};

// 验证语言代码是否有效
export function isValidLocale(locale) {
  return locales.includes(locale);
}
