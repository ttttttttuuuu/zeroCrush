import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const validLanguages = ["zh-CN", "zh-TW", "en"];

export default function RootLayout({ children, params }) {
  // 验证语言参数
  if (!validLanguages.includes(params.lang)) {
    return null; // 或重定向到默认语言
  }

  return (
    <html lang={params.lang}>
      <head>
        <title>ZeroCrush - 智能碳中和解决方案</title>
        <meta
          name="description"
          content="帮助企业实现碳中和目标，推动可持续发展"
        />
      </head>
      <body
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <Providers>
          <Navbar />
          {/* <main
            style={{
              minHeight: "calc(100vh - 64px - 100px)", // 减去navbar和footer的高度
              display: "flex",
              flexDirection: "column",
            }}
          > */}
          {children}
          {/* </main> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: "ZeroCrush - 智能碳中和解决方案",
  description: "帮助企业实现碳中和目标，推动可持续发展",
};
