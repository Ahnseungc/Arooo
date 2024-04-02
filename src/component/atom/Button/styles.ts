import styled, { css } from "styled-components";
import { MouseEventHandler } from "react";

export interface ButtonLayoutProps {
  buttontype: "Like" | "Next";
  onClick?: () => void;
}

export const LikeButtonStyles = css`
  width: 20px;
  height: 20px;
  background-color: rgba(234, 152, 174, 1);
  cursor: pointer;
  position: relative;
  transform: rotate(45deg);
  z-index: 0;

  &::before {
    background-color: rgba(234, 152, 174, 1);
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    left: -50%;
    top: 0;
    border-radius: 50%;
  }
  &::after {
    background-color: rgba(234, 152, 174, 1);
    content: "";
    width: 20px;
    height: 20px;
    top: -50%;
    left: 0;
    position: absolute;
    border-radius: 50%;
  }

  &:hover {
    background-color: red;
  }
  &:hover::before {
    background-color: red;
  }
  &:hover::after {
    background-color: red;
  }

  &:active {
    background-color: red;
  }
  &:active::before {
    background-color: red;
  }
  &:active::after {
    background-color: red;
  }
`;

export const NextButtonStyles = css`
  width: 30%;
  height: 5vh;
  background-color: skyblue;
  border-radius: 20px;
  color: white;
`;

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  border: none;
  ${({ buttontype }) => {
    switch (buttontype) {
      case "Like":
        return LikeButtonStyles;
      case "Next":
        return NextButtonStyles;
    }
  }}
`;

export default { ButtonLayout };
