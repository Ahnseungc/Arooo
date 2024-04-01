import { FC } from "react";
import { TextLayout, TextLayoutProps } from "./styles";
import { HTMLProps } from "react";

export interface TextProps
  extends HTMLProps<HTMLButtonElement>,
    TextLayoutProps {}

const Text: FC<TextProps> = ({ children, texttype, margin }) => {
  return (
    <TextLayout margin={margin} texttype={texttype}>
      {children}
    </TextLayout>
  );
};

export default Text;
