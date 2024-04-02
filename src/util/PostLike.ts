import axios from "axios";
import { mutate } from "swr";

interface PostLikeProps {
  id: string;
}

const PostLike = async ({ id }: PostLikeProps) => {
  try {
    const LikeCount = await axios.post(
      `http://localhost:3000//api/${id}/likes`
    ); //좋아요 증가
    mutate(`http://localhost:3000//api/${id}/likes`); // 데이터 갱신
    return true;
  } catch (error) {
    console.log("Error!!!", error);
    return false;
  }
};

export default PostLike;
