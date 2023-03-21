import React from 'react'
import Nav from '/components/blocks/Nav'
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
					<Nav />
				</div>
			</Container>
		</header>
	)
}

export default MenuBar
