import { FactDisplay, FactInput } from '@/components/fact';
import { Header } from '@/components/navigation';
import { Container } from '@/components/ui';
import { Modal } from '@/components/ui/';
import { usePosiFact, useSecureSession } from '@/hooks';
import { Urbanist } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';

const urbanist = Urbanist({ subsets: ['latin'] });

export default function PositiveToday() {
	const { session } = useSecureSession();

	const {
		fact,
		loading,
		editFact,
		showAlert,
		handleFactSubmit,
		handleEdit,
		handelFactUpdate,
		handleDelete,
		handleModal,
	} = usePosiFact();

	return (
		<>
			<Head>
				<title>Today&apos;s PosiFact</title>
			</Head>
			<main className={urbanist.className}>
				<Header session={session} />
				<div className='relative py-16 space-y-40'>
					<div
						aria-hidden='true'
						className='absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
					>
						<div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
						<div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600'></div>
					</div>
					<Container>
						<div className='relative flex flex-col items-center'>
							<Image src={'/logo.svg'} alt='logo' width={512} height={512} className='w-32' />
							<div className='mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12'>
								<h1 className='text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
									{fact.id !== 0 ? 'Your ' : 'Insert your '}
									today&apos;s <span className='text-primary dark:text-white'>PosiFact</span>:
								</h1>

								{fact.id === 0 || editFact ? (
									<FactInput
										fact={fact}
										updateContent={handelFactUpdate}
										handleSubmit={handleFactSubmit}
										loading={loading}
									/>
								) : (
									<FactDisplay fact={fact} setEditFact={handleEdit} setDeleteFact={handleDelete} />
								)}
							</div>
							{showAlert && (
								<Modal
									action={handleModal}
									id='delete-fact'
									content="Are you sure you want to delete your today's PosiFact?"
									discardText='Cancel'
									confirmText='Yes, delete'
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
