import { FC } from "react";
import { DetailPageLayout } from "./styles";
import ContentDetailBox from "@/component/organisms/ContentDetailBox";

interface ContentProps {
  content: ContentItemProps;
}

interface ContentItemProps {
  title: string;
  likes: number;
  content: string;
  id: string;
}

const DetailPage: FC<ContentProps> = ({ content }) => {
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
