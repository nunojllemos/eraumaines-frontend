import '/styles/globals.scss'
import MenuBar from '@/components/blocks/MenuBar'

export default function App({ Component, pageProps }) {
	return (
		<>
			<MenuBar />
			<Component {...pageProps} />
		</>
	)
}
