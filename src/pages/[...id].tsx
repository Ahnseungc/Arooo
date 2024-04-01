import { useRouter } from "next/router";
import DetailPage from "@/component/templates/DetailPageLayout";
import useSWR, { SWRConfig } from "swr";
import { fetcher } from "@/util/fetcher";
import { GetServerSideProps } from "next";
import { unstable_serialize } from "swr";

export default function Home() {
  const Router = useRouter();
  const { data } = useSWR(
    `http://localhost:3000//api/library/content/${Router}`,
    fetcher
  );

  return <SWRConfig>{data && <DetailPage content={data} />}</SWRConfig>;
}
