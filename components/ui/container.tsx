import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return <div className='mx-auto max-w-7xl px-6 md:px-12 xl:px-6'>{children}</div>;
};
