import axios from "axios";
import { useState } from "react";
import { mutate } from "swr";

interface PostLikeProps {
  id: string;
}

const URL = process.env.REACT_APP_URL;

const PostLike = async ({ id }: PostLikeProps) => {
  return await axios
    .post(`${URL}/content${id}/like`)
    .then((res) => {
      console.log(res);
      mutate(`${URL}/content${id}`);
      mutate(`${URL}/content`);
    })
    .catch((err) => console.log(err));
};

export default PostLike;
