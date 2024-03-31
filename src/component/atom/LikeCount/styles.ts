import styled, { css } from "styled-components";

export interface LikeCountLayoutProps {
  TextType: "LikeCount";
}

export const LikeCountStyles = css`
  color: black;
`;

export const LikeCountLayout = styled.p<LikeCountLayoutProps>`
  border: none;
  color: black;
  font-size: 13px;
  ${({ TextType }) => {
    switch (TextType) {
      case "LikeCount":
        return LikeCountStyles;
    }
  }}
`;

export default { LikeCountLayout };
