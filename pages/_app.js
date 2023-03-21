import MenuBar from '/components/blocks/MenuBar'
import '/styles/globals.scss'

export default function App({ Component, pageProps }) {
	return (
		<>
			<MenuBar />
			<Component {...pageProps} />
		</>
	)
}
