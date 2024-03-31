import styled, { css } from "styled-components";

export interface LikeLayoutProps {
  TextType: "Like";
}

export const LikeStyles = css`
  color: black;
`;

export const LikeLayout = styled.p<LikeLayoutProps>`
  border: none;

  background-color: none;

  display: flex;
  width: 300px;
  font-size: 13px;
  ${({ TextType }) => {
    switch (TextType) {
      case "Like":
        return LikeStyles;
    }
  }}
`;

export default { LikeLayout };
