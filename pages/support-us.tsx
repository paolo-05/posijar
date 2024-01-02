import ComingSoon from "@/components/coming-soon";
import Header from "@/components/navigation/header";
import { Urbanist } from "next/font/google";
import Head from "next/head";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function SupportUs() {
  return (
    <>
      <Head>
        <title>Support Us | My Positve Year</title>
      </Head>
      <main>
        <Header />
        <section className="space-y-40 mb-40">
          <ComingSoon />
        </section>
      </main>
    </>
  );
}
