import { NextPage } from "next";
import Head from "next/head";
import CreatorProfileBanner from "./CreatorProfileBanner";
import CreatorProfileVideos from "./CreatorProfileVideos";

const CreatorProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FreshCut</title>
      </Head>
      <main className="flex flex-col gap-8 items-center py-8 md:px-14">
        <CreatorProfileBanner />
        <CreatorProfileVideos />
      </main>
    </>
  );
};

export default CreatorProfilePage;
