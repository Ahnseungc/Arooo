import { FC } from "react";
import { DetailPageLayout } from "./styles";
import ContentDetailBox from "@/component/organisms/ContentDetailBox";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "@/util/fetcher";

interface ContentItemProps {
  title: string;
  likes: number;
  content: string;
  id: string;
}

const DetailPage: FC<ContentItemProps> = ({ title, likes, content, id }) => {
  return (
    <DetailPageLayout>
      <ContentDetailBox
        title={title}
        likes={likes}
        content={content}
        id={id}
        texttype={"Like"}
      />
    </DetailPageLayout>
  );
};

export default DetailPage;
