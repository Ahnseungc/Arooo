import { FC } from "react";
import { TextLayout, TextLayoutProps } from "./styles";
import { HTMLProps } from "react";

export interface TextProps
  extends HTMLProps<HTMLButtonElement>,
    TextLayoutProps {}

const Text: FC<TextProps> = ({ children, TextType, Margin }) => {
  return (
    <TextLayout Margin={Margin} TextType={TextType}>
      {children}
    </TextLayout>
  );
};

export default Text;
