import { FC } from "react";
import { LikeLayout, LikeLayoutProps } from "./styles";
import { HTMLProps } from "react";
import LikeCount from "@/component/atom/LikeCount";
import Button from "@/component/atom/Button/index";
import { useState } from "react";
import { usePostLike } from "@/hooks/usePostLike";

export interface LikeProps extends LikeLayoutProps {
  Likes: any;
  id: any;
}

const Like: FC<LikeProps> = ({ TextType, Likes, id }) => {
  const [count, setCount] = useState<number>(0);
  const onClickCount = () => setCount(count + 1);

  return (
    <LikeLayout TextType={TextType}>
      <Button buttonType="Like" onClick={() => usePostLike({ id, Likes })} />
      <LikeCount TextType="LikeCount">좋아요 수 {Likes}</LikeCount>
    </LikeLayout>
  );
};

export default Like;
