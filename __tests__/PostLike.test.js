const { describe } = require("node:test");
const PostLike = require("../src/util/PostLike");

describe("좋아요 카운터", () => {
  test("성공하면 true", () => {
    const validID = ["abcd0123efgh456", "123efgh456abcd0", "gh456abcd0123ef"];

    validID.forEach((Id) => {
      expect(PostLike(Id).toBe(true));
    });
  });

  describe("좋아요 카운터", () => {
    test("실패하면 error", () => {
      const validID = ["1", "2", "3"];
      validID.forEach((Id) => {
        expect(PostLike(Id).toBe(false));
      });
    });
  });
});
