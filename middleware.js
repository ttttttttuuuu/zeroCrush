import { NextResponse } from "next/server";
import { languages, defaultLanguage } from "./app/config/languages";

// 支持的语言列表

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // 如果是图片请求，直接从 public 目录获取
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
    return NextResponse.rewrite(new URL(`/public${pathname}`, request.url));
  }

  // 如果路径以多个语言代码开头，重定向到正确的路径
  const pathParts = pathname.split("/");
  if (
    pathParts.length > 2 &&
    languages.includes(pathParts[1]) &&
    languages.includes(pathParts[2])
  ) {
    // 保留第一个语言代码，移除其他的
    const correctPath = `/${pathParts[1]}/${pathParts
      .slice(2)
      .filter((part) => !languages.includes(part))
      .join("/")}`;
    return NextResponse.redirect(new URL(correctPath, request.url));
  }

  // 检查路径是否以语言代码开头
  const pathnameHasLang = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (!pathnameHasLang) {
    // 如果是根路径，重定向到默认语言
    if (pathname === "/") {
      return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url));
    }

    // 为其他路径添加默认语言
    return NextResponse.redirect(
      new URL(`/${defaultLanguage}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 匹配所有路径，但跳过api、_next和静态文件
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
