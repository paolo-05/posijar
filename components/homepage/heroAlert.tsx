import Link from 'next/link';

type HeroAlertProps = {
  content: string;
  href: string;
};

export const HeroAlert = ({ content, href }: HeroAlertProps) => {
  return (
    <Link
      href={href}
      className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      role="alert"
    >
      <span className="mr-3 rounded-full bg-primary px-4 py-1.5 text-xs text-white">
        New
      </span>{' '}
      <span className="text-sm font-medium">{content}</span>
      <svg
        className="ml-2 h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  );
};
