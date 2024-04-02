import useSWR from "swr";
import dynamic from "next/dynamic";
import { NextPage } from "next";
import { fetcher } from "@/util/fetcher";
import { useRouter } from "next/router";

const DetailPage = dynamic(
  import("@/component/templates/DetailPageLayout"),
  {}
);

const ContentDetail: NextPage = () => {
  const router = useRouter();
  const id = router.asPath;

  const {
    data: ContentItemProps,
    isLoading,
    error,
  } = useSWR(`http://localhost:3000//api/library/content${id}`, fetcher);
  if (isLoading) <div>...로딩중입니다.</div>;
  if (error) <div>에러입니다.</div>;

  return (
    <div>
      <DetailPage
        title={ContentItemProps?.title}
        likes={ContentItemProps?.likes}
        content={ContentItemProps?.content}
        id={ContentItemProps?.id}
      />
    </div>
  );
};
export default ContentDetail;
