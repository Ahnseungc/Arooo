import { useRouter } from "next/router";

import useSWR, { SWRConfig } from "swr";
import { fetcher } from "@/util/fetcher";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

const DetailPage = dynamic(import("@/component/templates/DetailPageLayout"), {
  suspense: true,
});

export default function Home() {
  const Router = useRouter();
  const [ready, setReady] = useState(false);
  const { data } = useSWR(
    ready && `http://localhost:3000//api/library/content/${Router}`,
    fetcher
  );
  useEffect(() => {
    setReady(true);
  }, []);

  return <SWRConfig>{data && <DetailPage content={data} />}</SWRConfig>;
}
