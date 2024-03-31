import styled from "styled-components";

export const MainPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const MainPageList = styled.ul`
  text-decoration: none;
  list-style: none;

  & li {
    margin-top: 100px;
  }

  & li:last-child {
    margin-bottom: 100px;
  }
`;
