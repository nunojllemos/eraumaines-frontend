import NavBar from '@/components/blocks/NavBar'
import { Logo } from '/components/atoms/Icons'
import Container from '../styled-components/layout/Container'

const MenuBar = () => {
	return (
		<header className='fixed w-full h-auto pt-5'>
			<Container>
				<div className='flex items-center justify-between'>
					<div className='text-white w-28 z-1'>
						{/* [ ] verificar se este text-color está certo em relação ao logo*/}
						<Logo />
					</div>
					<NavBar />
				</div>
			</Container>
		</header>
	)
}

export default MenuBar
