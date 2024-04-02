import { FC } from "react";
import { ButtonLayout, ButtonLayoutProps } from "./styles";
import { HTMLProps } from "react";

export interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    ButtonLayoutProps {
  onClick?: () => object;
}

const Button: FC<ButtonProps> = ({ children, buttontype, onClick }) => {
  return (
    <ButtonLayout type="button" buttontype={buttontype} onClick={onClick}>
      {children}
    </ButtonLayout>
  );
};

export default Button;
