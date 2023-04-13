import Link from 'next/link'
import { Instagram, Facebook } from '@/components/atoms/Icons'
import { Envelope } from '@/components/atoms/Icons'
import Hamburger from '@/molecules/Hamburger'

const Nav = ({ isMenuOpen, isHomepage, handleMenuClink }) => {
    const navLinks = [
        {
            title: 'nós',
            url: '/nos',
        },
        {
            title: 'histórias',
            url: '/historias',
        },
        {
            title: 'diário',
            url: '/diario',
        },
    ]

    return (
        <nav className='flex justify-end w-full h-full 768:w-auto '>
            <Hamburger handleMenuClink={handleMenuClink} isMenuOpen={isMenuOpen} />
            <div
                className={`fixed top-0 flex items-center duration-500 justify-center w-screen h-screen text-center bg-primary/80 768:bg-transparent 768:relative 768:h-auto 768:w-auto 768:left-0
                ${isMenuOpen ? 'left-0' : 'left-full'}`}
            >
                <ul className={`flex flex-col 768:flex-row 768:items-center 768:text-28 1280:text-32 ${isMenuOpen ? 'text-white' : 'text-current'}`}>
                    {navLinks.map((navLink, i) => (
                        <li className='pb-8 768:pr-8 768:py-0' key={i}>
                            <Link prefetch={false} className='font-power-grotesk' href={navLink.url}>
                                <p>{navLink.title}</p>
                            </Link>
                        </li>
                    ))}
                    <li className='flex gap-8 justify-center items-center order-last 768:order-none '>
                        <a href='https://www.instagram.com/' rel='noreferrer' target='_blank'>
                            <div className='w-14 768:w-11 1280:w-[32px] hover:opacity-60 duration-200'>
                                <Instagram />
                            </div>
                        </a>
                        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
                            <div className='w-8 768:w-7 1280:w-[16px] hover:opacity-60 duration-200'>
                                <Facebook />
                            </div>
                        </a>
                    </li>
                    <li className='pb-8 768:pb-0 768:pl-8'>
                        <Link href='/alo'>
                            <button
                                className={`contact-button transition-colors w-full flex items-center justify-between px-11 py-2 border-none rounded-md font-power-grotesk text-45 768:text-28 768:px-14 768:py-4 1280:text-32 1280:py-3 1280:px-12 ${
                                    isHomepage && !isMenuOpen ? 'is-home' : 'bg-black text-white'
                                } ${isMenuOpen ? '!bg-white !text-black' : ''}`}
                            >
                                <p className='text-current'>alô</p>
                                <div className='w-16 shrink-0 768:ml-4 768:w-12'>
                                    <Envelope />
                                </div>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
