import Container from "@/components/container";
import Header from "@/components/navigation/header";
import { useSession } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Tos() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Terms of Use | PosiJar</title>
      </Head>
      <main className={urbanist.className}>
        <Header session={session} />
        <section className="space-y-40 mb-40">
          <Container>
            <div className="relative pt-36 ml-auto">
              <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                  PosiJar Terms of Use
                </h1>
              </div>
              <div className="mt-8 text-gray-700 dark:text-gray-300">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Welcome to PosiJar!
                </h3>
                <p className="mt-2 text-gray-500">
                  By accessing this website, you agree to comply with and be
                  bound by the following terms and conditions of use. If you
                  disagree with any part of these terms, please do not use our
                  website.
                </p>
                <br />
                <ol className="list-decimal">
                  <li>
                    <span className="text-primary dark:text-white font-bold">
                      Use of the Service:
                    </span>{" "}
                    - You must be at least 13 years old to use this service. -
                    You are responsible for maintaining the security of your
                    account and password.
                  </li>
                  <li>
                    <span className="text-primary dark:text-white font-bold">
                      User Content:
                    </span>{" "}
                    - Users are solely responsible for the content they submit.
                    - PosiJar reserves the right to remove any content that
                    violates these terms.
                  </li>
                  <li>
                    <span className="text-primary dark:text-white font-bold">
                      Privacy:
                    </span>{" "}
                    - Your use of PosiJar is also governed by our Privacy
                    Policy.{" "}
                  </li>
                  <li>
                    <span className="text-primary dark:text-white font-bold">
                      Modifications:
                    </span>{" "}
                    - PosiJar reserves the right to modify or discontinue the
                    service without notice.
                  </li>
                  <li>
                    {" "}
                    <span className="text-primary dark:text-white font-bold">
                      Disclaimer:
                    </span>{" "}
                    - PosiJar is provided &qout;as is&quot; without any
                    warranties.{" "}
                  </li>
                  <li>
                    <span className="text-primary dark:text-white font-bold">
                      Governing Law:
                    </span>{" "}
                    - These terms are governed by and construed in accordance
                    with the laws of{" "}
                    <Link
                      href="https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en"
                      className="transition hover:text-primary"
                    >
                      UE
                    </Link>
                  </li>
                  <li>
                    <span className="text-primary dark:text-white font-bold">
                      Contact:
                    </span>{" "}
                    - For questions about these terms, please contact{" "}
                    <Link
                      href="mailto:paolo.bianchessi@icloud.com"
                      className="transition hover:text-primary"
                    >
                      Me
                    </Link>
                  </li>
                </ol>
                <br />
                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Thank you for using PosiJar!
                </h3>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
