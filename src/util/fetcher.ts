import axios from "axios";

export const fetcher = (url: string) => {
  const addurl = `${process.env.REACT_APP_URL}/${url}`;
  return axios
    .get(addurl)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
