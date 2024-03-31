import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import { MainpageHeaderLayout } from "./styles";

// export interface LikeProps
//   extends HTMLProps<HTMLButtonElement>,
//     LikeLayoutProps {}

const MainPageHeader: FC<any> = () => {
  return (
    <MainpageHeaderLayout>
      <Text TextType="MainPageTitle">메인 페이지 헤더</Text>
    </MainpageHeaderLayout>
  );
};

export default MainPageHeader;
