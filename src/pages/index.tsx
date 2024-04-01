import Head from "next/head";
import MainPage from "@/component/templates/MainPage";
import type { GetServerSideProps, NextPage } from "next";
import useSWR, { SWRConfig, unstable_serialize } from "swr";
import { fetcher } from "@/util/fetcher";
import useSWRInfinite from "swr/infinite";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Props {
  data: object;
}
const PAGE_SIZE = 10;

const Home: NextPage<Props> = ({ fallback }: any) => {
  // const { data } = useSWR("/api/library/content", fetcher, {
  //   fallbackData: fallback,
  // });

  return (
    <>
      <Head>
        <title>AROOO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SWRConfig>
          <MainPage />
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
