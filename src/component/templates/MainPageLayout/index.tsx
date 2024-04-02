import { FC, MutableRefObject } from "react";
import ContentBox from "@/component/organisms/ContentBox";
import { MainPageLayout, MainPageList } from "./styles";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { RefObject } from "react";

interface ContentProps {
  contents: {
    scrollRef: MutableRefObject<null>;
    targetRef: RefObject<HTMLDivElement>;
    data: any[] | undefined;
  };
}

interface ContentItemProps {
  id: string;
  title: string;
  likes: number;
}

const MainPage: FC<ContentProps> = ({ contents }) => {
  //무한스크롤

  console.log(contents);

  return (
    <MainPageLayout ref={contents?.scrollRef}>
      <section>
        <MainPageList>
          {contents?.data?.map((content) => {
            return content.map((item: ContentItemProps) => {
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
      <div ref={contents?.targetRef} />
    </MainPageLayout>
  );
};

export default MainPage;
