import { FC } from "react";
import ContentBox from "@/component/organisms/ContentBox";
import { MainPageLayout, MainPageList, MainPageSection } from "./styles";
import { useEffect } from "react";

interface ContentProps {
  data: {
    onNext: () => void;
    data: Array<ContentItemProps>[] | undefined;
  };
}

interface ContentItemProps {
  id: string;
  title: string;
  likes: number;
}

const MainPage: FC<ContentProps> = ({ data }) => {
  let contents = data.data?.flat();
  let onScroll = data.onNext;

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", onScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <MainPageLayout onScroll={onScroll}>
      <MainPageSection>
        <MainPageList>
          {contents?.map((content) => {
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
      </MainPageSection>
    </MainPageLayout>
  );
};

export default MainPage;
