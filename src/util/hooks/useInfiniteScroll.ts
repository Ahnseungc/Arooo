import { useCallback } from "react";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "@/util/fetcher";

const URL = process.env.REACT_APP_URL;

const useInfiniteScroll = (LIMITPAGEINDEX: number) => {
  const getKey = useCallback((pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null; //끝에 도달시 요청 하지 않음
    return `${URL}?skip=${pageIndex}&limit=${LIMITPAGEINDEX}`;
  }, []);

  const { data, error, setSize } = useSWRInfinite(getKey, fetcher, {
    persistSize: false, // 페이지 크기를 1로 초기화 하지 않음
    initialSize: 1, // 초기 로드해야하는 페이지 수
  });

  if (error) throw new Error(error);

  const onNext = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      setSize((prevSize) => prevSize + 1);
    }
  };

  return { onNext, data };
};

export default useInfiniteScroll;
