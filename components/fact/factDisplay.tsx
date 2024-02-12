import { useDropdown } from "@/hooks/useDropdown";
import { FactType } from "@/types/factType";
import Link from "next/link";

type FactDisplayProps = {
  fact: FactType;
  setEditFact: Function;
  setDeleteFact: Function;
};

export default function FactDisplay({
  fact,
  setEditFact,
  setDeleteFact,
}: FactDisplayProps) {
  const { isMenuOpen, toggleDropdown, setIsMenuOpen } = useDropdown();

  return (
    <>
      <div className="text-center text-xl text-gray-900 dark:text-gray-100 inline-flex w-full justify-center">
        <button onClick={toggleDropdown}>{fact.content}</button>
        <div
          className={`${
            !isMenuOpen && "hidden"
          } absolute z-50 mt-8 w-48 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 dark:bg-gray-800 `}
        >
          <div className="py-1">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setEditFact(true);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 truncate hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Edit
            </button>
          </div>
          <div className="py-1">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setDeleteFact();
              }}
              className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-md text-gray-600 dark:text-gray-300">
        Great, you did it! Come back tomorrow for the next one.
        <br />
        Or,
        <br />
        <Link
          href="/all-facts"
          className="block md:px-4 transition hover:text-primary"
        >
          See your Jar status
        </Link>
      </p>
    </>
  );
}
