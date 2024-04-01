import axios from "axios";
import { FC } from "react";

interface PostLikeProps {
  id: string;
  Likes: number;
}

export const usePostLike: FC<PostLikeProps> = ({ id, Likes }) => {
  //데이터로 id와 현재 count 전송

  const Postdata = {
    id: Likes + 1,
  };
  console.log(Postdata);

  const testdata = axios
    .post(`http://localhost:3000//api/${id}/like`, Postdata)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return testdata;
};
