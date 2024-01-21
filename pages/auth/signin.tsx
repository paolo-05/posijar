import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getServerSession } from "next-auth/next";
import { getProviders, signIn } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function SignIn({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <>
      <Head>
        <title>Sign In | PosiJar</title>
      </Head>
      <main className={urbanist.className}>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
            <Link
              href="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image
                className="w-8 h-8 mr-2"
                src="/logo.svg"
                alt="logo"
                height={512}
                width={512}
              />
              PosiJar
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <div className="flex items-center justify-between w-fit">
                  <button
                    type="button"
                    onClick={() => signIn("google")}
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                  <button
                    type="button"
                    onClick={() => signIn("discord")}
                    className="text-white bg-[#7289DA] hover:bg-[#7289DA]/90 focus:ring-4 focus:outline-none focus:ring-[#7289DA]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#7289DA]/55 me-2 mb-2"
                  >
                    <Image
                      loading="lazy"
                      height="24"
                      width="24"
                      id="provider-logo-dark"
                      src="https://authjs.dev/img/providers/discord.svg"
                      alt={""}
                    />
                    Sign in with Discord
                  </button>
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
