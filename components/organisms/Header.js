import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Nav from '@/organisms/Nav'
import { Logo } from '@/atoms/Icons'
import Container from '@/layout/Container'
import Headroom from 'react-headroom'

const Header = () => {
    const router = useRouter()
    const { locale, locales } = useRouter()
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isHomepage, setIsHomepage] = useState(router.asPath === '/')

    useEffect(() => {
        setIsHomepage(router.asPath === '/')
        closeMenu()
    }, [router.asPath])

    const closeMenu = () => setMenuOpen(false)

    const handleMenuClink = () => setMenuOpen(!isMenuOpen)

    const headroomOptions = {
        className: isHomepage ? 'is-home' : '',
        downTolerance: 10,
        upTolerance: 10,
        pinStart: 120,
        disable: isMenuOpen,
    }

    return (
        <Headroom {...headroomOptions}>
            <header className={`w-full h-auto py-5 relative ${isHomepage ? 'text-[var(--text-color)] bg-transparent' : 'text-[var(--text-color)]'}`}>
                <Container>
                    <div className='flex items-center justify-between 768:w-full '>
                        <Link href='/' scroll={false} prefetch={false}>
                            <div
                                className={`w-32 768:w-24 1280:w-40 transition-colors shrink-0 h-max relative z-1 ${
                                    isMenuOpen ? 'text-[var(--text-color)]' : ''
                                }`}
                            >
                                <Logo />
                            </div>
                        </Link>
                        <Nav locale={locale} locales={locales} isMenuOpen={isMenuOpen} handleMenuClink={handleMenuClink} isHomepage={isHomepage} />
                    </div>
                </Container>
            </header>
        </Headroom>
    )
}

export default Header
