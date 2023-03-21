import '/styles/globals.scss'
import Header from '/components/blocks/Header'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			{console.log('test')}
			<Component {...pageProps} />
		</>
	)
}
