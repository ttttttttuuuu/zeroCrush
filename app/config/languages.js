export const languages = ["zh-CN", "zh-TW", "en"];
export const defaultLanguage = "zh-CN";

export function isValidLanguage(lang) {
  return languages.includes(lang);
}
