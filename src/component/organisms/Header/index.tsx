import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import { MainpageHeaderLayout, MainpageHeaderHr } from "./styles";

const Header: FC<any> = () => {
  return (
    <MainpageHeaderLayout>
      <Text texttype="MainPageTitle" margin="40px 0 0 0">
        The Arooo Assignment
      </Text>
      <MainpageHeaderHr />
    </MainpageHeaderLayout>
  );
};

export default Header;
