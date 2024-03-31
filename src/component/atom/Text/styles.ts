import styled, { css } from "styled-components";

export interface ContentLayoutProps {
  TextType: "Text";
}

export const LikeButtonStyles = css`
  background-color: blue;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #e7e7e7;
  }

  &:active {
    background: #d7d7d7;
  }
`;

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  border: none;
  padding: 10px 30px;
  width: ${({ isFull }) => (isFull ? "100%" : "auto")};
  ${({ buttonType }) => {
    switch (buttonType) {
      case "Like":
        return LikeButtonStyles;
    }
  }}
`;

export default { ButtonLayout };
