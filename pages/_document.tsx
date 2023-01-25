import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@geist-ui/core";
import { Global } from "@emotion/react";
import globalStyles from "@/styles/globals";

export default function Document() {
  const geistUIcss = CssBaseline.flush();
  return (
    <Html lang="en">
      <Head>
        {geistUIcss}
        <Global styles={globalStyles}></Global>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
