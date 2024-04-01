import styled from "styled-components";

export const MainPageLayout = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const MainPageList = styled.ul`
  text-decoration: none;
  list-style: none;
  margin-top: 150px;

  & li {
    margin-top: 100px;
  }

  & li:last-child {
    margin-bottom: 100px;
  }
`;
