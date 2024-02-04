import Head from "next/head";

import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>A Fake Store</title>
        <meta name="description" content="Info for the Web Crawlers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main />
    </>
  );
}
