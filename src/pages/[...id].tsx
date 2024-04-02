import { SWRConfig } from "swr";
import dynamic from "next/dynamic";
import axios from "axios";
import { NextPage } from "next";

const DetailPage = dynamic(
  import("@/component/templates/DetailPageLayout"),
  {}
);

interface fallbackProps {
  fallback: {
    title: string;
    id: string;
    likes: number;
  };
}

const ContentDetail: NextPage<fallbackProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ refreshInterval: 3000, fallback }}>
      <DetailPage />
    </SWRConfig>
  );
};
export default ContentDetail;

export async function getServerSideProps(context: { params: { id: number } }) {
  const apiUrl = `http://localhost:3000//api/library/content/${context.params.id}`;
  const response = (await axios.get(apiUrl))?.data;
  console.log(response);

  return {
    props: { fallback: response },
  };
}
