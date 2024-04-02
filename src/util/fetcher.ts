import axios from "axios";

export const fetcher = (url: string) => {
  const addurl = `${process.env.REACT_APP_URL}/${url}`;

  return axios
    .get(addurl, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};
