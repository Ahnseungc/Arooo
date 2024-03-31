import { FC } from "react";
import MainPageFooter from "@/component/organisms/Footer";
import MainPageHeader from "@/component/organisms/MainPageHeader";
import ContentBox from "@/component/organisms/ContentBox";

const MainPage: FC<any> = () => {
  return (
    <>
      <MainPageHeader />
      <ContentBox />
      <MainPageFooter />
    </>
  );
};

export default MainPage;
