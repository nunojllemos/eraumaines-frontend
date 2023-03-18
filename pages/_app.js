import '@/styles/globals.scss'

import Header from '@/components/blocks/Header'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<div className='w-screen h-screen'>
				<img
					className='object-cover w-full h-full'
					// src="https://placeimg.com/1024/768/any"
					src='https://source.unsplash.com/random'
					alt='image'
				/>
			</div>
		</>
	)
}
