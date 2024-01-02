import Header from "@/components/navigation/header";
import ComingSoon from "@/components/ui/comingSoon";
import { signIn, useSession } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Head from "next/head";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Positive_today() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  return (
    <>
      <Head>
        <title>Today&apos;s PosiFact</title>
      </Head>
      <main className={urbanist.className}>
        <Header session={session} />
        <section className="space-y-40 mb-40">
          <ComingSoon />
        </section>
      </main>
    </>
  );
}
