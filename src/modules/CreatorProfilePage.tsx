import { NextPage } from "next";
import Head from "next/head";
import CreatorProfileBanner from "./CreatorProfileBanner";

const CreatorProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FreshCut</title>
      </Head>
      <main className="flex flex-col items-center py-8 md:px-14">
        <CreatorProfileBanner />
      </main>
    </>
  );
};

export default CreatorProfilePage;
