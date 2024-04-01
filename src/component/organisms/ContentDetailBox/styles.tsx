import styled, { css } from "styled-components";

export const ContentDetailBoxLayout = styled.div`
  border: none;
  background-color: none;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContentDetailBoxHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.section`
  border: none;

  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  background-color: aliceblue;
`;

export default { ContentDetailBoxHeader, Content, ContentDetailBoxLayout };
