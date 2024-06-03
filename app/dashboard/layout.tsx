import { CollapsableHeader, SideNavbar, User } from '@/components/navigation';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
			<SideNavbar />

			<div className='flex flex-col'>
				<CollapsableHeader>
					<User />
				</CollapsableHeader>
				{children}
			</div>
		</div>
	);
}
