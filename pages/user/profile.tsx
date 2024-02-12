import Header from "@/components/navigation/header";
import Container from "@/components/ui/container";
import Modal from "@/components/ui/modal";
import { useSecureSession } from "@/hooks/useSecuredSession";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Page() {
  const { session } = useSecureSession();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowModal = () => {
    // Display alert or confirmation modal
    setShowAlert(true);
  };

  const handleModal = async (confirm: boolean) => {
    setLoading(false);
    if (!confirm) {
      setShowAlert(false);
      return;
    }

    setLoading(true);
    await axios
      .post("/api/user/delete")
      .then(() => signOut({ callbackUrl: "/" }))
      .then((err) => console.error(err));

    setLoading(false);
    setShowAlert(false);
  };

  return (
    <>
      <Head>
        <title>{session?.user.name} | PosiJar</title>
      </Head>
      <main className={urbanist.className}>
        <Header session={session} />
        <div className="relative py-16 space-y-40">
          <div
            aria-hidden="true"
            className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          <Container>
            <div className="relative">
              <div className="flex items-center justify-center -space-x-2">
                <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full dark:bg-gray-800 dark:text-white">
                  <Image
                    src={
                      session?.user.image ||
                      "https://cdn.discordapp.com/embed/avatars/0.png"
                    }
                    alt="User Avatar"
                    className="rounded-full h-16 w-16 mr-4"
                    width={512}
                    height={512}
                  />
                  <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
                  <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-200">
                      Username: {session?.user.name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: {session?.user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleShowModal}
                    className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-red-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-sm font-semibold text-white">
                      Delete My Account
                    </span>
                  </button>
                </div>
              </div>
              {showAlert && (
                <Modal
                  action={handleModal}
                  id="delete-user"
                  content="Are you sure you want to delete your account?"
                  discardText="Cancel"
                  confirmText="Yes, delete"
                  confirmDisabled={loading}
                />
              )}
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
