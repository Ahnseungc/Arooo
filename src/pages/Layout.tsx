import Footer from "@/component/organisms/Footer";
import Header from "@/component/organisms/Header";
import { FC } from "react";
import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

const Layout: FC<any> = ({ children }) => {
  return (
    <MainLayout>
      <Header />
      {children}
      <Footer />
    </MainLayout>
  );
};

export default Layout;
