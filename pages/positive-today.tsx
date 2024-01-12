import FactDisplay from "@/components/fact/factDisplay";
import FactInput from "@/components/fact/factInput";
import Header from "@/components/navigation/header";
import Container from "@/components/ui/container";
import Modal from "@/components/ui/modal";
import axios from "axios";
import { format } from "date-fns";
import { signIn, useSession } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const urbanist = Urbanist({ subsets: ["latin"] });

const getTodayDate = (): string => format(new Date(), "yyyy-MM-dd");

export default function Positive_today() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  const [fact, setFact] = useState({
    id: 0,
    userId: 0,
    content: "",
    created_at: getTodayDate(),
  });
  const [showAlert, setShowAlert] = useState(false);
  const [editFact, setEditFact] = useState(false);
  const [loading, setLoading] = useState(false);

  const handelFactUpdate = (value: string) => {
    setFact((prevFact) => ({ ...prevFact, content: value }));
  };

  const handleFactSubmit = async () => {
    setLoading(true);
    if (fact.id === 0) {
      await axios.post("/api/fact/create", { fact: fact });
      fact.id = -1;
    } else {
      await axios.post("/api/fact/edit", { fact: fact });
      setEditFact(false);
    }
    setLoading(false);
  };

  const handleEdit = (value: boolean) => {
    setEditFact(value);
  };

  const handleDelete = () => {
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

    await axios.post("/api/fact/delete", { factId: fact.id });
    setFact({
      id: 0,
      userId: 0,
      content: "",
      created_at: getTodayDate(),
    });

    setLoading(false);
    setShowAlert(false);
  };

  useEffect(() => {
    console.log(fact.id);

    axios
      .post("/api/fact/get-today", { day: getTodayDate() })
      .then((resp) => {
        const fact = resp.data.fact;

        if (!fact) {
          return;
        }

        fact.created_at.split("T")[0];
        setFact(fact);
      })
      .catch((err) => console.error(err));
  }, [fact.id, loading]);

  return (
    <>
      <Head>
        <title>Today&apos;s PosiFact</title>
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
            <div className="relative flex flex-col items-center">
              <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                  {fact.id !== 0 ? "Your " : "Insert your "}
                  today&apos;s{" "}
                  <span className="text-primary dark:text-white">PosiFact</span>
                  :
                </h1>

                {fact.id === 0 || editFact ? (
                  <FactInput
                    fact={fact}
                    updateContent={handelFactUpdate}
                    handleSubmit={handleFactSubmit}
                  />
                ) : (
                  <FactDisplay
                    fact={fact}
                    setEditFact={handleEdit}
                    setDeleteFact={handleDelete}
                  />
                )}
              </div>
              {showAlert && (
                <Modal
                  action={handleModal}
                  id="delete-fact"
                  content="Are you sure you want to delete your today's PosiFact?"
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
