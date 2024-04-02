import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";
import useSWR, { SWRConfig, unstable_serialize } from "swr";
import { fetcher } from "@/util/fetcher";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useEffect } from "react";

const MainPage = dynamic(() => import("@/component/templates/MainPageLayout"), {
  suspense: true,
});

interface Props {
  fallback: object;
}

const Home: NextPage<Props> = ({ fallback }: any) => {
  const [ready, setReady] = useState(false);
  const { data } = useSWR(ready && "/api/library/content", fetcher, {
    fallbackData: fallback,
    suspense: true,
  });
  
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <Head>
        <title>AROOO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SWRConfig value={{ fallback }}>
          <Suspense fallback={<div>loading...</div>}>
            <MainPage />
          </Suspense>
        </SWRConfig>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const content = await fetcher("http://localhost:3000//api/library/content");

  return {
    props: {
      fallback: {
        [unstable_serialize("/api/library/content")]: content,
      },
    },
  };
};
