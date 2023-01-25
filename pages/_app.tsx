import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import Navbar from "@/components/navbar";
import { GeistProvider } from "@geist-ui/core";
import { SWRConfig } from "swr";

const font = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          dedupingInterval: 10000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <div className={font.className}>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </SWRConfig>
    </GeistProvider>
  );
}
