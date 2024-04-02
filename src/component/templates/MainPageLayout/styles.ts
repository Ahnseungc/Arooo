import styled from "styled-components";

export const MainPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainPageList = styled.ul`
  text-decoration: none;
  list-style: none;
  margin-top: 150px;
  text-align: center;

  & li {
    margin-top: 100px;
  }

  & li:last-child {
    margin-bottom: 100px;
  }
`;

export const MainPageSection = styled.section`
  text-align: center;
  width: 100%;
  height: 100%;
`;
