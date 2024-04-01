import axios from "axios";
import { FC } from "react";

interface PostLikeProps {
  id: string;
  count: number;
}

export const usePostLike: FC<PostLikeProps> = ({ id, count }) => {
  //데이터로 id와 현재 count 전송

  const Postdata = {
    id: count,
  };

  return axios
    .post(`http://localhost:3000//api/${id}/like`, Postdata)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
