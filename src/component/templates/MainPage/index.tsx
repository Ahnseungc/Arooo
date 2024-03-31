import { FC } from "react";
import MainPageFooter from "@/component/organisms/Footer";
import MainPageHeader from "@/component/organisms/MainPageHeader";
import ContentBox from "@/component/organisms/ContentBox";
import { MainPageLayout, MainPageList } from "./styles";

const MainPage: FC<any> = () => {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <MainPageLayout>
      <MainPageHeader />
      <section>
        <MainPageList>
          {test.map(() => {
            return <ContentBox />;
          })}
        </MainPageList>
      </section>
      <MainPageFooter />
    </MainPageLayout>
  );
};

export default MainPage;
