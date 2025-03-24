export const siteConfig = {
  languages: ["zh-CN", "zh-TW", "en"],
  defaultLanguage: "zh-CN",
};

export function generateStaticParams() {
  return siteConfig.languages.map((lang) => ({
    lang,
  }));
}
