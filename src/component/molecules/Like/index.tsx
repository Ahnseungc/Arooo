import { FC } from "react";
import { LikeLayout, LikeLayoutProps } from "./styles";
import { HTMLProps } from "react";
import LikeCount from "@/component/atom/LikeCount";
import Button from "@/component/atom/Button/index";
import { useState } from "react";

export interface LikeProps
  extends HTMLProps<HTMLButtonElement>,
    LikeLayoutProps {
  LikesCount: number;
}

const Like: FC<LikeProps> = ({ TextType, LikesCount }) => {
  const [count, setCount] = useState<number>(0);
  const onClickCount = () => setCount(count + 1);
  console.log(LikesCount);

  return (
    <LikeLayout TextType={TextType}>
      <Button buttonType="Like" onClick={onClickCount} />
      <LikeCount TextType="LikeCount">좋아요 수 {LikesCount}</LikeCount>
    </LikeLayout>
  );
};

export default Like;
