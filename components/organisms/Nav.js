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
        // {
        //     title: t.nav.diary,
        //     url: '/diario',
        // },
    ]

    return (
        <nav className='flex justify-end w-full h-full 768:w-auto text-40 768:text-24'>
            <Hamburger handleMenuClink={handleMenuClink} isMenuOpen={isMenuOpen} />
            <div
                className={`fixed top-0 flex items-center duration-500 justify-center w-screen h-screen text-center 768:bg-transparent 768:relative 768:h-auto 768:w-auto 768:left-0
                ${isMenuOpen ? 'bg-[var(--background-color)] left-0' : 'left-full'}`}
            >
                <ul className={`flex flex-col 768:flex-row 768:items-center`}>
                    {navLinks.map((navLink, i) => {
                        return (
                            <li className='pb-8 768:pr-8 768:py-0' key={i}>
                                <Link
                                    prefetch={false}
                                    scroll={false}
                                    className={`font-rial hover-menu ${
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
                                className={`hover-button contact-button transition-colors w-full flex items-center justify-between px-11 py-2 border-none rounded-md font-rial 768:px-14 768:py-4 1280:py-[6.5px] 1280:px-4 ${
                                    isHomepage && !isMenuOpen ? 'is-home' : ''
                                } ${isMenuOpen ? '!bg-[var(--text-color)] !text-[var(--background-color)]' : ''}`}
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
                            className={`locale-button w-20 768:w-16 aspect-square overflow-hidden transition-colors flex items-center justify-between rounded-md font-rial relative group ${
                                isHomepage && !isMenuOpen
                                    ? 'bg-[var(--text-color)] text-[var(--background-color)]'
                                    : 'bg-[var(--background-color)] text-[var(--text-color)]'
                            } ${isMenuOpen ? '!bg-[var(--text-color)] !text-[var(--background-color)]' : ''}`}
                        >
                            {locales?.map(_locale => (
                                <Link
                                    scroll={false}
                                    locale={false}
                                    key={_locale.slice(0, 2)}
                                    href={`/${_locale}/${router.pathname.split('/')[1]}`}
                                    className={`transition-all w-full h-full flex items-center justify-center absolute ${
                                        locale === _locale.slice(0, 2)
                                            ? '-left-full fix-hover:left-0 fix-hover:group-hover:-left-full'
                                            : 'left-0 fix-hover:left-full fix-hover:group-hover:left-0 z-1'
                                    }`}
                                >
                                    {_locale.slice(0, 2)}
                                </Link>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
