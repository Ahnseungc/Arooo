import { FC, useState } from "react";
import MainPageFooter from "@/component/organisms/Footer";
import MainPageHeader from "@/component/organisms/Header";
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

const PAGE_SIZE = 3;

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
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  console.log(data);

  return (
    <MainPageLayout ref={scrollRef}>
      <section>
        <MainPageList>
          {data?.map((content) => {
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
      <div ref={targetRef} />
    </MainPageLayout>
  );
};

export default MainPage;
