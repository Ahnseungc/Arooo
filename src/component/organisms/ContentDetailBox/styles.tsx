import styled, { css } from "styled-components";

export const ContentDetailBoxLayout = styled.p`
  border: none;
  background-color: none;
  /* align-items: center;
  justify-content: space-between; */
  width: 100%;
  font-size: 13px;
`;

export const ContentDetailBoxHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.section`
  border: none;
  background-color: none;
  width: 100%;
  font-size: 13px;
  background-color: aliceblue;
  height: max-content;
`;

export default { ContentDetailBoxHeader, Content, ContentDetailBoxLayout };
