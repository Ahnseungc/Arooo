import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import { MainPageFooterLayout } from "./styles";

// export interface LikeProps
//   extends HTMLProps<HTMLButtonElement>,
//     LikeLayoutProps {}

const MainPageFooter: FC<any> = () => {
  return <MainPageFooterLayout>메인 페이지 푸터</MainPageFooterLayout>;
};

export default MainPageFooter;
