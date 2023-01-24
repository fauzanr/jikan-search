import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/ui/navbar";
import { Rubik } from "@next/font/google";

const font = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
