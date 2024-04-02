import { FC } from "react";
import ContentBox from "@/component/organisms/ContentBox";
import { MainPageLayout, MainPageList } from "./styles";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

interface ContentProps {
  id: string;
  title: string;
  likes: number;
}

const PAGE_SIZE: number = 10;
const MainPage: FC = () => {
  //무한스크롤

  const InfiniteData = useInfiniteScroll(PAGE_SIZE);

  return (
    <MainPageLayout ref={InfiniteData.scrollRef}>
      <section>
        <MainPageList>
          {InfiniteData.data?.map((content) => {
            return content.map((item: ContentProps) => {
              return (
                <ContentBox
                  title={item.title}
                  likes={item.likes}
                  id={item.id}
                  key={item.id}
                />
              );
            });
          })}
        </MainPageList>
      </section>
      <div ref={InfiniteData.targetRef} />
    </MainPageLayout>
  );
};

export default MainPage;
