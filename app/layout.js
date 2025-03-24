import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "碳中和ESG平台",
  description: "企业ESG报告与碳中和追踪平台",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head>
        <title>碳中和ESG平台</title>
        <meta name="description" content="企业ESG报告与碳中和追踪平台" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            <div
            // className="overflow-y-scroll h-screen"
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   height: "100vh",
            //   overflow: "scroll",
            // }}
            >
              <Navbar />
              {children}
              {/* <main style={{ flex: 1 }}></main> */}
              {/* <Footer /> */}
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
