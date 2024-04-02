export default function handler(req, res) {
  const { contentId } = req.query;

  if (req.method === "GET") {
    // 콘텐츠 상세 정보를 가져오는 로직을 작성합니다.
    const content = {
      id: "contentId",
      title: "콘텐츠 타이틀",
      likes: 3,
      content: "콘텐츠 본문",
    };
    res.status(200).json(content);
  } else if (req.method === "POST") {
    // 좋아요를 증가시키는 로직을 작성합니다.
    // 이 부분은 실제 데이터베이스에서 좋아요를 증가시키거나 다른 처리를 해야 합니다.
    const updatedLikes = 2; // 임시 값
    res.status(200).json({ likes: updatedLikes });
  } else {
    res.status(405).end(); // 허용되지 않은 메소드
  }
}
