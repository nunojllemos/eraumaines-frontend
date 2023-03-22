import Nav from '@/blocks/Nav'
import { Logo } from '@/atoms/Icons'
import Container from '@/layout/Container'

const Header = () => {
	return (
		<header className='fixed w-full h-auto pt-5'>
			<Container>
				<div className='flex items-center justify-between'>
					<div className='text-white w-28 z-1'>
						{/* [ ] verificar se este text-color está certo em relação ao logo*/}
						<Logo />
					</div>
					<Nav />
				</div>
			</Container>
		</header>
	)
}

export default Header
