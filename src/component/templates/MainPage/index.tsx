import { FC } from "react";
import MainPageFooter from "@/component/organisms/MainPageFooter";
import MainPageHeader from "@/component/organisms/MainPageHeader";
import ContentBox from "@/component/organisms/ContentBox";
import { MainPageLayout, MainPageList } from "./styles";
import { useSWRConfig } from "swr";

const MainPage: FC<any> = () => {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const { refreshInterval, mutate, cache } = useSWRConfig();

  console.log(cache.get("http://localhost:3000//api/hello")?.data);

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
