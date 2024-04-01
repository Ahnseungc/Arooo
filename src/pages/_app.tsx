import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global-style";
import Layout from "./DefaultLayout";

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
