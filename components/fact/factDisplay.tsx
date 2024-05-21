import { useDropdown, useRandomPhrase } from '@/hooks';
import { FactType } from '@/types/factType';
import Link from 'next/link';
import { FC } from 'react';

interface FactDisplayProps {
	fact: FactType;
	setEditFact: Function;
	setDeleteFact: Function;
}

export const FactDisplay: FC<FactDisplayProps> = ({ fact, setEditFact, setDeleteFact }) => {
	const { isMenuOpen, toggleDropdown, setIsMenuOpen } = useDropdown();

	const { randomPhrase } = useRandomPhrase();

	return (
		<>
			<div className='text-center text-xl text-gray-900 dark:text-gray-100 inline-flex w-full justify-center'>
				<div className='flex items-center bg-gray-100  dark:bg-gray-700 p-8 rounded-lg'>
					<span>{fact.content}</span>
					<button
						className='inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-600'
						type='button'
						onClick={toggleDropdown}
					>
						<svg
							className='w-4 h-4 text-gray-500 dark:text-gray-400'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 4 15'
						>
							<path d='M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
						</svg>
					</button>
					<div id='dropdown' className='relative'>
						<div
							className={`${
								isMenuOpen ? 'absolute' : 'hidden'
							} z-50 w-48 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 dark:bg-gray-800 `}
						>
							<div className='py-1'>
								<button
									onClick={() => {
										setIsMenuOpen(false);
										setEditFact(true);
									}}
									className='block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 truncate hover:bg-gray-200 dark:hover:bg-gray-700'
								>
									Edit
								</button>
							</div>
							<div className='py-1'>
								<button
									onClick={() => {
										setIsMenuOpen(false);
										setDeleteFact();
									}}
									className='block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-200 dark:hover:bg-gray-700'
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='text-center text-md text-gray-600 dark:text-gray-300 mt-1'>{randomPhrase}</div>
			<div className='text-center text-md text-gray-600 dark:text-gray-300 mt-1'>Or, </div>
			<div className='flex justify-center'>
				<Link
					href='/my-jar'
					className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-info before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
				>
					<span className='relative text-base font-semibold text-white'>See you Jar status</span>
				</Link>
			</div>
		</>
	);
};
