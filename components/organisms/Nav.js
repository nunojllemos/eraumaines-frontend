import Link from 'next/link'
import { CloseMenu, OpenMenu, Instagram, Facebook } from '@/components/atoms/Icons'
import { Envelope } from '@/components/atoms/Icons'
import { useState } from 'react'

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const handleMenuClink = () => {
        setMenuOpen(!isMenuOpen)
    }

    const navLinks = [
        {
            title: 'nós',
            url: '/',
        },
        {
            title: 'histórias',
            url: '/',
        },
        {
            title: 'diário',
            url: '/',
        },
    ]

    return (
        <nav className='flex justify-end w-full h-full text-white text-45 '>
            <button className=' z-1  border-none w-14 transition-opacity h-14 1024:hidden relative'>
                <div
                    onClick={handleMenuClink}
                    className={`${
                        isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                    } transition-opacity absolute w-full h-full top-0 left-0`}
                >
                    <OpenMenu />
                </div>
                <div
                    onClick={handleMenuClink}
                    className={`${
                        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    } transition-opacity absolute w-full h-full top-0 left-0 p-1`}
                >
                    <CloseMenu />
                </div>
            </button>

            <div
                className={`absolute top-0 right-0 flex items-center justify-center w-screen h-screen text-center bg-primary/80 1024:bg-transparent 1024:relative 
                ${isMenuOpen ? 'flex' : 'hidden'}`}
            >
                <ul className='flex flex-col 1024:flex-row 1024:items-center 1024:text-28'>
                    {navLinks.map((navLink, i) => {
                        return (
                            <li className='pb-8 1024:pr-8 1024:py-0' key={i}>
                                <Link prefetch={false} className='font-power-grotesk' href={navLink.url}>
                                    <p>{navLink.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                    <li className='flex gap-8 justify-center order-last'>
                        <Link href={'https://www.instagram.com/'}>
                            <div className='w-14'>
                                <Instagram />
                            </div>
                        </Link>
                        <Link href={'https://www.facebook.com/'}>
                            <div className='w-8'>
                                <Facebook />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <button className='flex justify-center bg-white mt-4 mb-8 px-12 py-2 border-none rounded-md font-power-grotesk text-45 1024:text-28'>
                            <p className='text-black'>alô</p>
                            <div className='w-16 ml-8 shrink-0 1024:ml-4 1024:w-12'>
                                <Envelope />
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
