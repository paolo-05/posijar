import MyPosiJar from "@/components/jar";
import Header from "@/components/navigation/header";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function AllFacts() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .post("/api/fact/get-count")
      .then((res) => setCount(res.data.count))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <Head>
        <title>All your PosiFacts | PosiJar</title>
      </Head>
      <main className={urbanist.className}>
        <Header session={session} />

        <div className="relative pt-10 lg:pt-0">
          <div
            aria-hidden="true"
            className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          <MyPosiJar count={count} />
        </div>
      </main>
    </>
  );
}
