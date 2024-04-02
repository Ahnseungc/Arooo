import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import Like from "@/component/molecules/Like";
import { ContentBoxLayout } from "./styles";
import Link from "next/link";

interface ContentBoxProps {
  title: string;
  likes: number;
  id: string;
}

const ContentBox: FC<ContentBoxProps> = ({ title, likes, id }) => {
  return (
    <ContentBoxLayout>
      <Text margin="0" texttype="ContentTitle">
        <Link
          href={`/${id}`}
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        >
          {title}
        </Link>
      </Text>

      <Like texttype="Like" likes={likes} id={id} />
    </ContentBoxLayout>
  );
};

export default ContentBox;
