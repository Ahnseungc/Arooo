import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import Like from "@/component/molecules/Like";
import {
  ContentDetailBoxHeader,
  Content,
  ContentDetailBoxLayout,
} from "./styles";

// export interface LikeProps
//   extends HTMLProps<HTMLButtonElement>,
//     LikeLayoutProps {}

const ContentDetailBox: FC<any> = () => {
  return (
    <ContentDetailBoxLayout>
      <ContentDetailBoxHeader>
        <Text TextType="ContentTitle">콘텐츠 타이틀</Text>
        <Like TextType="Like" />
      </ContentDetailBoxHeader>
      <Content>콘텐츠</Content>
    </ContentDetailBoxLayout>
  );
};

export default ContentDetailBox;
