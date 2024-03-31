import { FC } from "react";
import { ButtonLayout, ButtonLayoutProps } from "./styles";
import { HTMLProps } from "react";

export interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    ButtonLayoutProps {}

const Button: FC<ButtonProps> = ({ children, buttonType, isFull }) => {
  return (
    <ButtonLayout type="button" buttonType={buttonType} isFull={isFull}>
      {children}
    </ButtonLayout>
  );
};

export default Button;
