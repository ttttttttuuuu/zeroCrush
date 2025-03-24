import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/config/i18n";
import ThemeProvider from "../providers/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "zh-CN" }, { locale: "zh-TW" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!isValidLocale(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Navbar />
              <main style={{ flex: 1 }}>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
