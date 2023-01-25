import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@geist-ui/core";

export default function Document() {
  const geistUIcss = CssBaseline.flush();
  return (
    <Html lang="en">
      <Head>{geistUIcss}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
