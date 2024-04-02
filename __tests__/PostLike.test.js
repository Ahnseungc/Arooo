import axios from "axios";
import { mutate } from "swr";
import { PostLike } from "../src/util/PostLike";

jest.mock("axios");
jest.mock("swr", () => ({
  mutate: jest.fn(),
}));

describe("PostLike", () => {
  it("성공", async () => {
    axios.post.mockResolvedValueOnce();

    await PostLike({ id: "123" });

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3000//api/library/content123"
    );

    expect(mutate).toHaveBeenCalledWith(
      "http://localhost:3000//api/library/content123"
    );
  });

  it("실패", async () => {
    axios.post.mockRejectedValueOnce();

    const result = await PostLike({ id: "123" });

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3000//api/library/content123"
    );

    expect(mutate).not.toHaveBeenCalled();

    expect(result).toBe(false);
  });
});
