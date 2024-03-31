import Head from "next/head";
import MainPage from "@/component/templates/MainPage";
import type { GetServerSideProps, NextPage } from "next";
import useSWR, { SWRConfig, unstable_serialize } from "swr";
import { fetcher } from "@/util/fetcher";

interface Props {
  data: object;
}

const Home: NextPage<Props> = ({ fallback }: any) => {
  const { data } = useSWR("http://localhost:3000//api/hello", fetcher, {
    fallbackData: fallback,
  });

  return (
    <>
      <Head>
        <title>AROOO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SWRConfig value={data}>
          <MainPage />
        </SWRConfig>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const content = await fetcher("http://localhost:3000//api/hello");

  return {
    props: {
      fallback: {
        content,
      },
    },
  };
};
