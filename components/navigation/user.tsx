import { useDropdown } from '@/hooks/useDropdown';
import { useSignOut } from '@/hooks/useSignOut';
import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';

type UserProps = {
	session: Session | null;
};

export default function User({ session }: UserProps) {
	const { isMenuOpen, toggleDropdown } = useDropdown();
	const { handleLogout } = useSignOut();

	if (!session) {
		return (
			<div className='mt-12 lg:mt-0'>
				<Link
					href='/positive-today'
					className='relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
				>
					<span className='relative text-sm font-semibold text-white'>Get Started</span>
				</Link>
			</div>
		);
	} else {
		const { user } = session;
		return (
			<div className='mt-12 lg:mt-0'>
				<div className='relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'>
					<button onClick={toggleDropdown} type='button' className='relative text-sm font-semibold text-white'>
						<Image
							className='h-8 w-8 rounded-full object-cover inline'
							src={user?.image || 'https://cdn.discordapp.com/embed/avatars/0.png'}
							alt={user?.name || 'user avatar'}
							height={256}
							width={256}
						/>
						<span className='ml-2'>{user?.name}</span>
					</button>
				</div>

				<div
					className={`${
						!isMenuOpen && 'hidden'
					} absolute z-50 mt-4 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 dark:bg-gray-800`}
				>
					<div className='py-1'>
						<Link href='/user/profile'>
							<p className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 truncate hover:bg-gray-200 dark:hover:bg-gray-700'>
								Email: <br />
								{user?.email}
							</p>
						</Link>
					</div>
					<div className='py-1'>
						<button
							onClick={handleLogout}
							className='block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-200 dark:hover:bg-gray-700'
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		);
	}
}
