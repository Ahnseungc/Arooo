import { FC } from "react";
import { LikeLayout, LikeLayoutProps } from "./styles";
import LikeCount from "@/component/atom/LikeCount";
import Button from "@/component/atom/Button/index";
import usePostLike from "@/util/PostLike";

export interface LikeProps extends LikeLayoutProps {
  likes: number;
  id: string;
}

const Like: FC<LikeProps> = ({ texttype, likes, id }) => {
  return (
    <LikeLayout texttype={texttype}>
      <Button buttontype="Like" onClick={() => usePostLike({ id })} />
      <LikeCount $TextType="LikeCount">좋아요 수 {likes}</LikeCount>
    </LikeLayout>
  );
};

export default Like;
