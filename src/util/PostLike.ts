import axios from "axios";
import { useState } from "react";
import { mutate } from "swr";

interface PostLikeProps {
  id: string;
}

const PostLike = async ({ id }: PostLikeProps) => {
  return await axios
    .post(`http://localhost:3000//api/library/content${id}`)
    .then(() => mutate(`http://localhost:3000//api/library/content${id}`))
    .catch((err) => console.log(err));
};

export default PostLike;
