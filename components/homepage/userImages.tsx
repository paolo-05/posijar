import Image from 'next/image';

export const UserImages: React.FC = () => {
	const images = [
		{
			heightWidth: 400,
			src: 'https://cdn.discordapp.com/embed/avatars/1.png',
			className: 'h-8 w-8 rounded-full object-cover',
		},
		{
			heightWidth: 200,
			src: 'https://cdn.discordapp.com/embed/avatars/2.png',
			className: 'h-12 w-12 rounded-full object-cover',
		},
		{
			heightWidth: 200,
			src: 'https://cdn.discordapp.com/embed/avatars/3.png',
			className: 'z-10 h-16 w-16 rounded-full object-cover',
		},
		{
			heightWidth: 200,
			src: 'https://cdn.discordapp.com/embed/avatars/4.png',
			className: 'relative h-12 w-12 rounded-full object-cover',
		},
		{
			heightWidth: 200,
			src: 'https://cdn.discordapp.com/embed/avatars/0.png',
			className: 'h-8 w-8 rounded-full object-cover',
		},
	];

	return images.map((image, index) => (
		<Image
			key={index}
			loading='lazy'
			width={image.heightWidth}
			height={image.heightWidth}
			src={image.src}
			alt='member photo'
			className={image.className}
		/>
	));
};
