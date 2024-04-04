import { FactType } from '@/types/factType';
import { MouseEventHandler } from 'react';

type FactInputProps = {
	fact: FactType;
	updateContent: Function;
	handleSubmit: MouseEventHandler<HTMLButtonElement>;
	loading: boolean;
};

export const FactInput = ({ fact, updateContent, handleSubmit, loading }: FactInputProps) => {
	return (
		<>
			<p className='text-center text-xl text-gray-600 dark:text-gray-300'>
				Join other peoples that have already joined this journey to a more positive year.
			</p>
			<div className='flex flex-wrap justify-center my-5'>
				<input type='hidden' name='id' value={fact?.id || ''} />
				<textarea
					name='content'
					id='factContent'
					className='form-textarea dark:bg-gray-800 block h-full w-full rounded-md border-0 py-1.5 px-7 text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-300 md:text-base md:leading-6 sm:text-sm sm:leading-6'
					placeholder='Today was sunny... I love sun days.'
					value={fact?.content}
					onChange={(e) => {
						updateContent(e.target.value);
					}}
				/>
				<input type='hidden' name='date' value={fact.created_at} />
			</div>
			<div className='flex flex-wrap justify-center gap-6'>
				<button
					onClick={handleSubmit}
					disabled={!fact.content || loading}
					className='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary disabled:before:bg-primary/75 disabled:cursor-not-allowed disabled:transition-none disabled:before:rounded-full disabled:before:scale-100 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
				>
					<span className='relative text-base font-semibold text-white dark:text-dark'>Save!</span>
				</button>
			</div>
		</>
	);
};
