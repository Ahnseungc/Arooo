import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import { MainpageHeaderLayout, MainpageHeaderHr } from "./styles";

// export interface LikeProps
//   extends HTMLProps<HTMLButtonElement>,
//     LikeLayoutProps {}

const Header: FC<any> = () => {
  return (
    <MainpageHeaderLayout>
      <Text TextType="MainPageTitle" Margin="40px 0 0 0">
        The Arooo Assignment
      </Text>
      <MainpageHeaderHr />
    </MainpageHeaderLayout>
  );
};

export default Header;
