import styled, { css } from "styled-components";
import { MouseEventHandler } from "react";

export interface ButtonLayoutProps {
  buttonType: "Like";
  isFull?: boolean;
  onClick?: () => void;
}

export const LikeButtonStyles = css`
  width: 20px;
  height: 20px;
  background-color: red;
  cursor: pointer;
  position: relative;
  transform: rotate(45deg);

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    left: -50%;
    top: 0;
    border-radius: 50%;
    background: red;
  }
  &::after {
    content: "";
    width: 20px;
    height: 20px;
    top: -50%;
    left: 0;
    position: absolute;
    border-radius: 50%;
    background: red;
  }
`;

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  border: none;

  /* width: ${({ isFull }) => (isFull ? "100%" : "auto")}; */
  ${({ buttonType }) => {
    switch (buttonType) {
      case "Like":
        return LikeButtonStyles;
    }
  }}
`;

export default { ButtonLayout };
