import '@/styles/globals.scss'
import Header from '@/organisms/Header'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	)
}
