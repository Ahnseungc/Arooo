import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return <div>{router.asPath}</div>;
}
