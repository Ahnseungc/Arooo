import styled, { css } from "styled-components";

export interface MainPageFooterProps {
  // 타입정의
}

export const MainPageFooterLayout = styled.footer`
  border: none;
  background-color: none;
  text-align: center;
  width: 100%;
  height: 10%;
  font-size: 13px;
  background-color: white;
  position: fixed;
  bottom: 0;
`;

export const MainpageFooterHr = styled.hr`
  background-color: #00000033;
  border: 0;
  width: 100%;
  height: 1px;
`;

export default { MainPageFooterLayout, MainpageFooterHr };
