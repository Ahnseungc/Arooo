import { FC, useState } from "react";
import MainPageFooter from "@/component/organisms/MainPageFooter";
import MainPageHeader from "@/component/organisms/MainPageHeader";
import ContentBox from "@/component/organisms/ContentBox";
import { MainPageLayout, MainPageList } from "./styles";
import { useCallback } from "react";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "@/util/fetcher";
import { useRef } from "react";
import useObserver from "@/hooks/useObserver";

interface ContentProps {
  id: string;
  title: string;
  likes: number;
}

const PAGE_SIZE = 10;

const MainPage: FC = () => {
  //무한스크롤
  const getKey = useCallback((pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3000//api/library/content?skip=${pageIndex}&limit=${PAGE_SIZE}`;
  }, []);

  const scrollRef = useRef(null);
  const getPage = useCallback(() => {
    if (!scrollRef.current) return;
    setSize((prev) => prev + 1);
  }, []);

  const [targetRef] = useObserver(getPage);

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  return (
    <MainPageLayout ref={scrollRef}>
      <MainPageHeader />
      <section>
        <MainPageList>
          {data?.map((content) => {
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
      <div ref={targetRef} />
      <MainPageFooter />
    </MainPageLayout>
  );
};

export default MainPage;
