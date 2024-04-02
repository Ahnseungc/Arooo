import { useCallback, useRef } from "react";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "@/util/fetcher";
import useObserver from "./useObserver";

const useInfiniteScroll = (PAGESIZE: number) => {
  const getKey = useCallback((pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://localhost:3000//api/library/content?skip=${pageIndex}&limit=${PAGESIZE}`;
  }, []);
  const scrollRef = useRef(null);
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);
  const getPage = useCallback(() => {
    if (!scrollRef.current) return;
    setSize((prev) => prev + 1);
  }, []);
  const [targetRef] = useObserver(getPage);

  return { scrollRef, targetRef, data };
};

export default useInfiniteScroll;
