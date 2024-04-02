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
    .then(() => {
      mutate(`${URL}/content${id}`);
      mutate(`${URL}/content`);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export default PostLike;
