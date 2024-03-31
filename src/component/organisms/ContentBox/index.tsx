import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import Like from "@/component/molecules/Like";
import { ContentBoxLayout } from "./styles";
import Link from "next/link";

// export interface LikeProps
//   extends HTMLProps<HTMLButtonElement>,
//     LikeLayoutProps {}

const ContentBox: FC<any> = () => {
  return (
    <ContentBoxLayout>
      <Text Margin="0" TextType="ContentTitle">
        <Link href={"/1"}>콘텐츠 타이틀</Link>
      </Text>
      <Like TextType="Like" />
    </ContentBoxLayout>
  );
};

export default ContentBox;
