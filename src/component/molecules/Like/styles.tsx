import styled, { css } from "styled-components";

export interface LikeLayoutProps {
  texttype: "Like";
}

export const LikeStyles = css`
  color: black;
`;

export const LikeLayout = styled.div<LikeLayoutProps>`
  border: none;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  width: 50%;
  font-size: 13px;
  ${({ texttype }) => {
    switch (texttype) {
      case "Like":
        return LikeStyles;
    }
  }}
`;

export default { LikeLayout };
