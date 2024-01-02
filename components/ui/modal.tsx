type ModalProps = {
  id: string;
  content: string;
  discardText: string;
  confirmText: string;
  confirmDisabled: boolean;
  action: Function;
};

export default function Modal({
  id,
  content,
  discardText,
  confirmText,
  confirmDisabled,
  action,
}: ModalProps) {
  const handleModal = (value: boolean) => {
    action(value);
  };

  return (
    <div
      id={id}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-md shadow-md max-w-md dark:bg-gray-800">
        <p className="text-xl font-bold mb-4 dark:text-white">{content}</p>
        <div className="flex justify-end">
          <button
            disabled={confirmDisabled}
            onClick={() => handleModal(true)}
            className="relative mx-1 flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-red-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max before:disabled:bg-red-400"
          >
            <span className="relative text-base font-semibold text-white">
              {confirmText}
            </span>
          </button>
          <button
            onClick={() => handleModal(false)}
            // className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
            className="relative flex h-9 mx-1 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gray-600 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-600 dark:before:bg-gray-600 sm:w-max"
          >
            <span className="relative text-base font-semibold text-white">
              {discardText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
