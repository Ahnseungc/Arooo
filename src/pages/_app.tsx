import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global-style";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
