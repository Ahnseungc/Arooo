import { FC } from "react";
import { ButtonLayout, ButtonLayoutProps } from "./styles";
import { HTMLProps } from "react";
import { MouseEventHandler } from "react";

export interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    ButtonLayoutProps {
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, buttonType, isFull, onClick }) => {
  return (
    <ButtonLayout
      type="button"
      buttonType={buttonType}
      isFull={isFull}
      onClick={onClick}
    >
      {children}
    </ButtonLayout>
  );
};

export default Button;
