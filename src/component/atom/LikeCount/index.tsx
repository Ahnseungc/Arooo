import { FC } from "react";
import { LikeCountLayout, LikeCountLayoutProps } from "./styles";
import { HTMLProps } from "react";

export interface LikeCountProps
  extends HTMLProps<HTMLElement>,
    LikeCountLayoutProps {}

const LikeCount: FC<LikeCountProps> = ({ children, $TextType }) => {
  return <LikeCountLayout $TextType={$TextType}>{children}</LikeCountLayout>;
};

export default LikeCount;
