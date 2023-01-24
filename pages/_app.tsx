import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import Navbar from "@/components/navbar";
import { GeistProvider } from "@geist-ui/core";

const font = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <div className={font.className}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </GeistProvider>
  );
}
