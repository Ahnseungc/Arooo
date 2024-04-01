import { FC } from "react";
import MainPageFooter from "@/component/organisms/MainPageFooter";
import MainPageHeader from "@/component/organisms/MainPageHeader";
import ContentBox from "@/component/organisms/ContentBox";
import { MainPageLayout, MainPageList } from "./styles";
import { useSWRConfig } from "swr";

interface ContentProps {
  id: string;
  title: string;
  likes: number;
}

const MainPage: FC<any> = () => {
  const { refreshInterval, mutate, cache } = useSWRConfig();
  const Contents: ContentProps[] = cache.get("http://localhost:3000//api/hello")
    ?.data;

  return (
    <MainPageLayout>
      <MainPageHeader />
      <section>
        <MainPageList>
          {Contents.map((content) => {
            return (
              <ContentBox
                title={content.title}
                likes={content.likes}
                id={content.id}
                key={content.id}
              />
            );
          })}
        </MainPageList>
      </section>
      <MainPageFooter />
    </MainPageLayout>
  );
};

export default MainPage;
