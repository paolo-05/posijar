import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const getTodayDate = (): string => format(new Date(), "yyyy-MM-dd");

export const usePosiFact = () => {
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

  return {
    fact,
    loading,
    editFact,
    showAlert,
    handleFactSubmit,
    handleEdit,
    handelFactUpdate,
    handleDelete,
    handleModal,
  };
};
