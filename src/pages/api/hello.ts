// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  title: string;
  likes: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
    { id: "123", title: "asdasdasdaas", likes: 1 },
  ]);
}
