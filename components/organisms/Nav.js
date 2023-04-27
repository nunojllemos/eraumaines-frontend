import Link from 'next/link'
import { useRouter } from 'next/router'
import { Instagram, Facebook } from '@/components/atoms/Icons'
import { Envelope } from '@/components/atoms/Icons'
import Hamburger from '@/molecules/Hamburger'
import useTranslation from '@/hooks/useTranslation'

const Nav = ({ isMenuOpen, isHomepage, handleMenuClink, locale, locales }) => {
    const t = useTranslation()
    const router = useRouter()

    const navLinks = [
        {
            title: t.nav.us,
            url: '/nos',
        },
        {
            title: t.nav.histories,
            url: '/historias',
        },
        {
            title: t.nav.diary,
            url: '/diario',
        },
    ]

    return (
        <nav className='flex justify-end w-full h-full 768:w-auto text-40 768:text-24'>
            <Hamburger handleMenuClink={handleMenuClink} isMenuOpen={isMenuOpen} />
            <div
                className={`fixed top-0 flex items-center duration-500 justify-center w-screen h-screen text-center bg-primary/80 768:bg-transparent 768:relative 768:h-auto 768:w-auto 768:left-0
                ${isMenuOpen ? 'left-0' : 'left-full'}`}
            >
                <ul className={`flex flex-col 768:flex-row 768:items-center ${isMenuOpen ? 'text-white' : 'text-current'}`}>
                    {navLinks.map((navLink, i) => {
                        return (
                            <li className='pb-8 768:pr-8 768:py-0' key={i}>
                                <Link
                                    prefetch={false}
                                    scroll={false}
                                    className={`font-power-grotesk hover-menu ${
                                        router.asPath !== '/' && navLink.url.toLowerCase().includes(router.asPath.split('/')[1]?.toLowerCase()) ? 'active' : ''
                                    }`}
                                    href={navLink.url}
                                >
                                    {navLink.title}
                                </Link>
                            </li>
                        )
                    })}
                    <li className='flex gap-8 justify-center items-center order-last 768:order-none '>
                        <a href='https://www.instagram.com/' rel='noreferrer' target='_blank'>
                            <div className='w-14 768:w-10 hover:opacity-60 duration-200 aspect-square social-link'>
                                <Instagram />
                            </div>
                        </a>
                        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
                            <div className='w-14 768:w-10 hover:opacity-60 duration-200 aspect-square social-link'>
                                <Facebook />
                            </div>
                        </a>
                    </li>
                    <li className='pb-8 768:pb-0 768:pl-8 '>
                        <Link href='/alo' scroll={false}>
                            <button
                                className={`hover-button contact-button transition-colors w-full flex items-center justify-between px-11 py-2 border-none rounded-md font-power-grotesk 768:px-14 768:py-4 1280:py-3 1280:px-12 ${
                                    isHomepage && !isMenuOpen ? 'is-home' : 'bg-black text-white'
                                } ${isMenuOpen ? '!bg-white !text-black' : ''}`}
                            >
                                <span className='transition-colors text-current'>{t.nav.contact}</span>
                                <div className='w-16 shrink-0 768:ml-4 768:w-12'>
                                    <Envelope />
                                </div>
                            </button>
                        </Link>
                    </li>
                    <li className='pb-8 768:pl-8 768:py-0 relative flex justify-center'>
                        <div
                            className={`w-20 768:w-16 aspect-square overflow-hidden transition-colors flex items-center justify-between rounded-md font-power-grotesk relative group ${
                                isHomepage && !isMenuOpen ? 'bg-white text-black' : 'bg-black text-white'
                            } ${isMenuOpen ? '!bg-white !text-black' : ''}`}
                        >
                            {locales?.map((loc, index) => (
                                <Link
                                    scroll={false}
                                    locale={false}
                                    key={index}
                                    href={`/${loc}/${router.pathname.split('/')[1]}`}
                                    className={`transition-all w-full h-full flex items-center justify-center absolute ${
                                        locale === loc.slice(0, 2) ? 'left-0 fix-hover:group-hover:-left-full' : 'left-full fix-hover:group-hover:left-0 z-1'
                                    }`}
                                >
                                    {loc.slice(0, 2)}
                                </Link>
                            ))}
                        </div>
                        {/* <div className='transition-all flex flex-col absolute bg-white border border-black -right-1 top-[calc(100%_+_4px)] shadow-lg pointer-events-none opacity-0 -translate-y-4 fix-hover:peer-hover:opacity-100 fix-hover:peer-hover:translate-y-0 fix-hover:peer-hover:pointer-events-auto fix-hover:hover:opacity-100 fix-hover:hover:translate-y-0 fix-hover:hover:pointer-events-auto'>
                            
                        </div> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
