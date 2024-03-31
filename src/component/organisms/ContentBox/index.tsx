import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import Like from "@/component/molecules/Like";
import { ContentBoxLayout } from "./styles";

// export interface LikeProps
//   extends HTMLProps<HTMLButtonElement>,
//     LikeLayoutProps {}

const ContentBox: FC<any> = () => {
  return (
    <ContentBoxLayout>
      <Text TextType="ContentTitle">콘텐츠 타이틀</Text>
      <Like TextType="Like" />
    </ContentBoxLayout>
  );
};

export default ContentBox;
