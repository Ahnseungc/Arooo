import { renderHook, act } from "@testing-library/react";
import useInfiniteScroll from "../src/util/hooks/useInfiniteScroll";

jest.mock("swr/infinite", () => jest.fn());

describe("useInfiniteScroll", () => {
  it("should call setSize when onNext is called", () => {
    const setSize = jest.fn();
    const data = [];
    const getKey = jest.fn();
    const useSWRInfiniteMock = jest.fn().mockReturnValue({ data, setSize });

    require("swr/infinite").default = useSWRInfiniteMock;

    const { result } = renderHook(() => useInfiniteScroll(10));

    act(() => {
      result.current.onNext();
    });

    expect(setSize).toHaveBeenCalledWith(expect.any(Function));
  });
});
