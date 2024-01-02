import CallToAction from "@/components/homePage/callToAction";
import Features from "@/components/homePage/features";
import HeroSection from "@/components/homePage/heroSection";
import Header from "@/components/navigation/header";
import { useSession } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Head from "next/head";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Homepage | PosiJar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={urbanist.className}>
        <Header session={session} />
        <section className="space-y-40 mb-40">
          <HeroSection session={session} />
          <Features session={session} />
          <CallToAction session={session} />
        </section>
      </main>
    </>
  );
}
