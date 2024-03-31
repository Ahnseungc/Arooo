import styled, { css } from "styled-components";

export interface TextLayoutProps {
  TextType: "MainPageTitle" | "DetailPageTitle" | "ContentTitle";
}

export const MainPageTitleTextStyles = css`
  color: black;
  font-size: 20px;
`;
export const DetailPageTitleTextStyles = css`
  color: black;
  font-size: 16px;
`;

export const ContentTitleTextStyles = css`
  color: black;
  font-size: 12px;
`;

export const TextLayout = styled.h3<TextLayoutProps>`
  border: none;
  color: black;
  font-size: 16px;
  ${({ TextType }) => {
    switch (TextType) {
      case "MainPageTitle":
        return MainPageTitleTextStyles;
      case "DetailPageTitle":
        return DetailPageTitleTextStyles;
      case "ContentTitle":
        return ContentTitleTextStyles;
    }
  }}
`;

export default { TextLayout };
