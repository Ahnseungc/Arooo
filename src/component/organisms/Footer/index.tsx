import { FC } from "react";
import { HTMLProps } from "react";
import Text from "@/component/atom/Text";
import {
  MainPageFooterLayout,
  MainPageFooterProps,
  MainpageFooterHr,
} from "./styles";

export interface FooterProps
  extends HTMLProps<HTMLButtonElement>,
    MainPageFooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <MainPageFooterLayout>
      <MainpageFooterHr />
      <Text TextType="MainPageTitle" Margin="40px 0 40px 0">
        Arooo
      </Text>
    </MainPageFooterLayout>
  );
};

export default Footer;
