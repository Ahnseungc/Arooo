import { FC } from "react";
import Text from "@/component/atom/Text";
import Like from "@/component/molecules/Like";
import {
  ContentDetailBoxHeader,
  Content,
  ContentDetailBoxLayout,
} from "./styles";
import { LikeLayoutProps } from "@/component/molecules/Like/styles";

export interface LikeProps extends LikeLayoutProps {
  title: string;
  likes: number;
  content: string;
  id: string;
}

const ContentDetailBox: FC<LikeProps> = ({ title, likes, content, id }) => {
  return (
    <ContentDetailBoxLayout>
      <ContentDetailBoxHeader>
        <Text margin="0" texttype="ContentTitle">
          {title}
        </Text>
        <Like likes={likes} id={id} texttype="Like" />
      </ContentDetailBoxHeader>
      <Content>{content}</Content>
    </ContentDetailBoxLayout>
  );
};

export default ContentDetailBox;
