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
        <nav className='flex justify-end w-full h-full 768:w-auto '>
            <button className='z-1 border-none w-14 transition-opacity h-14 768:hidden relative'>
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
                className={`fixed top-0 flex items-center duration-500 justify-center w-screen h-screen text-center bg-primary/80 768:bg-transparent 768:relative 768:h-auto 768:w-auto 768:left-0
                ${isMenuOpen ? 'left-0' : 'left-full'}`}
            >
                <ul className='flex flex-col 768:flex-row 768:items-center 768:text-28 1280:text-32'>
                    {navLinks.map((navLink, i) => {
                        return (
                            <li className='pb-8 768:pr-8 768:py-0' key={i}>
                                <Link prefetch={false} className='font-power-grotesk' href={navLink.url}>
                                    <p>{navLink.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                    <li className='flex gap-8 justify-center items-center order-last 768:order-none'>
                        <Link href={'https://www.instagram.com/'}>
                            <div className='w-14 768:w-11 1280:w-[32px] '>
                                <Instagram />
                            </div>
                        </Link>
                        <Link href={'https://www.facebook.com/'}>
                            <div className='w-8 768:w-7 1280:w-[16px]'>
                                <Facebook />
                            </div>
                        </Link>
                    </li>
                    <li className='pb-8 768:pb-0 768:pl-8'>
                        <button className='w-full flex items-center justify-between bg-white px-11 py-2 border-none rounded-md font-power-grotesk text-45 768:text-28 768:px-14 768:py-4 1280:text-32 1280:py-3 1280:px-12'>
                            <p className='text-black'>alô</p>
                            <div className='w-16 shrink-0 768:ml-4 768:w-12'>
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
