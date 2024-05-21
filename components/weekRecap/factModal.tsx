import React from 'react';
import { FactType } from '@/types/factType';
import { CloseIcon } from '../svg';

interface FactModalProps {
	fact: FactType;
	show: boolean;
	onClose: () => void;
}

export const FactModal: React.FC<FactModalProps> = ({ fact, show, onClose }) => {
	if (!show) return <></>;

	return (
		<div
			tabIndex={-1}
			aria-hidden='true'
			className={`${
				!show && 'hidden'
			} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50`}
		>
			<div className='relative bg-white rounded-lg shadow dark:bg-gray-800'>
				<div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
					<h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
						Showing your PosiFact on{' '}
						{new Date(fact.created_at).toLocaleDateString(undefined, {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</h3>
					<button
						type='button'
						className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
						onClick={onClose}
					>
						<CloseIcon className='w-3 h-3' />
						<span className='sr-only'>Close modal</span>
					</button>
				</div>

				<div className='p-4 md:p-5'>
					<div className='flex flex-col justify-center items-center'>
						<p className='text-gray-800 dark:text-gray-100 text-lg'>{fact.content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
