import React from 'react'
import { CloseMenu, OpenMenu, Instagram, Facebook } from 'components/atoms/Icons'

import Link from 'next/link'

import { Envelope } from 'components/atoms/Icons'

const Nav = () => {
	const navLinks = [
		{
			title: 'nos',
			url: '/',
		},
		{
			title: 'historias',
			url: '/',
		},
		{
			title: 'diario',
			url: '/',
		},
	]

	return (
		<nav className='flex w-auto h-auto text-white text-45 '>
			<div className='z-1'>
				<button className='h-full bg-transparent border-none w-14 1024:hidden'>
					{/* retirar z-1 e meter no CloseMenu quando aberto menu */}
					<OpenMenu />
				</button>

				<button className='hidden '>
					<CloseMenu />
				</button>
			</div>
			<div className='absolute top-0 right-0 flex items-center justify-center w-full h-full text-center bg-primary 1024:bg-transparent 1024:relative '>
				<ul className='1024:flex 1024:items-center 1024:text-28'>
					{navLinks.map((navLink, i) => {
						return (
							<li className='py-4 1024:pr-8 1024:py-0' key={i}>
								<Link prefetch={false} className='font-power-grotesk' href={navLink.url}>
									<p>{navLink.title}</p>
								</Link>
							</li>
						)
					})}
					<li className='hidden mr-10 1024:flex'>
						<div className='w-12 mr-8 '>
							<Link href={'https://www.instagram.com/'}>
								<Instagram />
							</Link>
						</div>
						<div className='w-7'>
							<Link href={'https://www.facebook.com/'}>
								<Facebook />
							</Link>
						</div>
					</li>
					<li className='flex justify-center pt-4 pb-8 1024:pr-8 '>
						<button className='flex px-12 py-2 border-none rounded-md font-power-grotesk text-45 1024:text-28'>
							<p>ola</p>
							<div className='w-16 ml-8 picture shrink-0 1024:ml-4 1024:w-12'>
								<Envelope />
							</div>
						</button>
					</li>
					<li className='flex justify-center pb-4 1024:hidden'>
						<div className='mr-8 w-14'>
							<Link href={'https://www.instagram.com/'}>
								<Instagram />
							</Link>
						</div>
						<div className='w-8'>
							<Link href={'https://www.facebook.com/'}>
								<Facebook />
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
