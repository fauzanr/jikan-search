import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import Navbar from "@/components/navbar";
import { GeistProvider } from "@geist-ui/core";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

const font = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <GeistProvider>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
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
    </SessionProvider>
  );
}
