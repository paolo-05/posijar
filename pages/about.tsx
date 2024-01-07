import Header from "@/components/navigation/header";
import Container from "@/components/ui/container";
import { useSession } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function About() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>About | PosiJar</title>
      </Head>
      <main className={urbanist.className}>
        <Header session={session} />
        <section className="space-y-40 mb-40">
          <Container>
            <div className="relative pt-36 max-w-2xl mx-auto">
              <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="text-black dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                  About PosiJar
                </h1>
              </div>
              <div className="mt-8 text-gray-900 dark:text-gray-100">
                <p className="text-lg mb-4">
                  Welcome to{" "}
                  <span className="text-primary font-bold">PosiJar</span>, where
                  we believe in the power of positivity and the joy of
                  celebrating life&apos;s little moments.
                </p>
                <p className="mb-4">
                  PosiJar was founded by{" "}
                  <Link
                    className="hover:text-primary font-bold"
                    href="https://github.com/paolo-05"
                    target="_blank"
                  >
                    Paolo Bianchessi
                  </Link>{" "}
                  with the mission to provide individuals with a digital space
                  to capture and cherish positive moments each day. We
                  understand the importance of mindfulness and gratitude in
                  fostering a happier and more fulfilling life.
                </p>
                <p className="mb-4">
                  In a world that can sometimes feel overwhelming, PosiJar
                  serves as your personal sanctuary to document achievements,
                  express gratitude, and reflect on the positive aspects of your
                  journey.
                </p>
                <p className="mb-4">
                  Our platform encourages you to create a digital jar of
                  happiness by jotting down simple joys, milestones, or moments
                  of gratitude. Whether it&apos;s a small win, a beautiful
                  sunset, or a heartfelt quote, every positive note contributes
                  to building a collection of memories that can bring a smile to
                  your face.
                </p>
                {/* <p className="mb-4">
                  PosiJar is not just a journal; it&apos;s a community of
                  individuals dedicated to fostering positivity and supporting
                  each other on the journey towards a brighter, more optimistic
                  life.
                </p> */}
                <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Join us in spreading positivity and making a conscious effort
                  to appreciate the beauty that surrounds us every day. Start
                  your journey with PosiJar today!
                </h3>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
