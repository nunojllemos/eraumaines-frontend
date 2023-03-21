import React from 'react'
import Nav from './Nav'
import { Logo } from '/components/atoms/Icons'
import Container from '/components/ui/Container'

const MenuBar = () => {
	return (
		<Container>
			<header className='fixed flex items-center justify-between w-full h-auto pt-5'>
				<div className='text-white w-28 z-1'>
					{/* [ ] verificar se este text-color está certo em relação ao logo*/}
					<Logo />
				</div>
				<Nav />
			</header>
		</Container>
	)
}

export default MenuBar
