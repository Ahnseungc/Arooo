export default function handler(req, res) {
  // API 요청 처리
  const { skip = 0, limit = 10 } = req.query;

  // 여기에서 콘텐츠 데이터를 데이터베이스나 외부 소스에서 가져와서 응답합니다.
  const contents = [
    { id: "abcd0123efgh456", title: "콘텐츠 타이틀", likes: 1 },
    { id: "123efgh456abcd0", title: "콘텐츠 타이틀", likes: 3 },
    { id: "gh456abcd0123ef", title: "콘텐츠 타이틀", likes: 0 },
    { id: "gh456abcd0123ef", title: "콘텐츠 타이틀", likes: 0 },
    { id: "gh456abcd01223ef", title: "콘텐츠 타이틀", likes: 0 },
    { id: "gh456abcd01323ef", title: "콘텐츠 타이틀", likes: 2 },
    { id: "gh456abc4d0123ef", title: "콘텐츠 타이틀", likes: 1 },

    // 콘텐츠 데이터 예시. 데이터베이스나 외부 소스에서 가져온다.
  ];

  // 콘텐츠를 skip과 limit에 맞게 잘라서 응답합니다.
  const paginatedContents = contents.slice(skip, skip + limit);

  res.status(200).json(paginatedContents);
}
