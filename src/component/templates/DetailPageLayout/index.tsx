import { FC } from "react";
import { DetailPageLayout } from "./styles";
import ContentDetailBox from "@/component/organisms/ContentDetailBox";
import { useSWRConfig } from "swr";

interface ContentItemProps {
  title: string;
  likes: number;
  content: string;
  id: string;
}

const DetailPage: FC = () => {
  const config = useSWRConfig();
  const content = config.fallback;

  return (
    <DetailPageLayout>
      <ContentDetailBox
        title={content.title}
        likes={content.likes}
        content={content.content}
        id={content.id}
        texttype={"Like"}
      />
    </DetailPageLayout>
  );
};

export default DetailPage;
