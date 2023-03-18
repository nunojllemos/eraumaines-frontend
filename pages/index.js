import Grid from '@/components/ui/Grid'
import Container from '@/components/ui/container'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='py-40'>
				<Container>
					<Grid mobileCols={2} tabletCols={12} desktopCols={12}>
						<div>1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
						<div>5</div>
						<div>6</div>
					</Grid>
				</Container>
			</main>
		</>
	)
}
