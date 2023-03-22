import { useEffect } from 'react'
import '@/styles/globals.scss'
import Header from '@/organisms/Header'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		alert('Development branch')
	}, [])

	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	)
}
