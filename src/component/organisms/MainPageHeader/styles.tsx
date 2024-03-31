import styled, { css } from "styled-components";

export const MainpageHeaderLayout = styled.header`
  border: none;
  background-color: none;
  width: 100%;
  text-align: center;
  font-size: 13px;
  height: 10vh;
  position: fixed;
  background-color: white;
  z-index: 1;
`;

export const MainpageHeaderHr = styled.hr`
  margin-top: 40px;
  background-color: #00000033;
  border: 0;
  width: 100%;
  height: 1px;
`;

export default { MainpageHeaderLayout, MainpageHeaderHr };
