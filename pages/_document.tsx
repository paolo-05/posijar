import { Footer } from '@/components/navigation';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='apple-mobile-web-app-title' content='My Posive Year' />
				<meta name='application-name' content='My Posive Year' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#fff' media='(prefers-color-scheme: light)' />
				<meta name='theme-color' content='#0f172a' media='(prefers-color-scheme: dark)' />
				<meta
					name='description'
					content='PosiJar is a platform to capture and celebrate daily moments of positivity. Join us to create your digital jar of happiness!'
				/>
				<meta name='keywords' content='positivity, happiness, gratitude, mindfulness, journaling' />
				<link rel='canonical' href='https://posijar.com' />
				<meta property='og:title' content='PosiJar - Capture and Celebrate Positivity' />
				<meta
					property='og:description'
					content='PosiJar is a platform to capture and celebrate daily moments of positivity. Join us to create your digital jar of happiness!'
				/>
				<meta property='og:image' content='https://posijar.com/logo.svg' />
				<meta property='og:url' content='https://posijar.com' />
				<meta name='twitter:card' content='https://posijar.com/preview.png' />
				<meta name='twitter:title' content='PosiJar - Capture and Celebrate Positivity' />
				<meta
					name='twitter:description'
					content='PosiJar is a platform to capture and celebrate daily moments of positivity. Join us to create your digital jar of happiness!'
				/>
				<meta name='twitter:image' content='https://posijar.com/preview.png' />
			</Head>
			<body className='bg-white dark:bg-gray-900'>
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
