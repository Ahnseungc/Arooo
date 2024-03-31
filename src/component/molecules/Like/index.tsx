import { FC } from "react";
import { LikeLayout, LikeLayoutProps } from "./styles";
import { HTMLProps } from "react";
import LikeCount from "@/component/atom/LikeCount";
import Button from "@/component/atom/Button/index";

export interface LikeProps
  extends HTMLProps<HTMLButtonElement>,
    LikeLayoutProps {}

const Like: FC<LikeProps> = () => {
  return (
    <LikeLayout TextType="Like">
      <LikeCount TextType="LikeCount">좋아요 수</LikeCount>
      <Button buttonType="Like" />
    </LikeLayout>
  );
};

export default Like;
