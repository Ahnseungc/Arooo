import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import Like from "@/component/molecules/Like";
import { ContentBoxLayout } from "./styles";
import Link from "next/link";

// export interface LikeProps
//   extends HTMLProps<HTMLButtonElement>,
//     LikeLayoutProps {}

interface ContentBoxProps {
  title: string;
  likes: number;
  id: string;
}

const ContentBox: FC<ContentBoxProps> = ({ title, likes, id }) => {
  return (
    <ContentBoxLayout>
      <Text Margin="0" TextType="ContentTitle">
        <Link
          href={`/${id}`}
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        >
          {title}
        </Link>
      </Text>
      <Like TextType="Like" LikesCount={likes} />
    </ContentBoxLayout>
  );
};

export default ContentBox;
