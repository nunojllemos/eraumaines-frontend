import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Nav from '@/organisms/Nav'
import { Logo } from '@/atoms/Icons'
import Container from '@/layout/Container'
import Headroom from 'react-headroom'

const Header = () => {
    const router = useRouter()
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isHomepage, setIsHomepage] = useState(router.asPath === '/')

    useEffect(() => {
        setIsHomepage(router.asPath === '/')
        closeMenu()
    }, [router.asPath])

    const closeMenu = () => setMenuOpen(false)

    const handleMenuClink = () => {
        setMenuOpen(!isMenuOpen)
    }

    const headroomOptions = {
        downTolerance: 10,
        upTolerance: 10,
        pinStart: 10,
    }

    return (
        <Headroom {...headroomOptions}>
            <header className={`transition-all w-full h-auto py-5 bg-transparent relative ${isHomepage ? 'text-white' : 'text-black'}`}>
                <Container>
                    <div className='flex items-center justify-between 768:w-full '>
                        <Link href='/' scroll={false} prefetch={false}>
                            <div className={`w-24 transition-colors 1280:w-28 shrink-0 h-max relative z-1 ${isMenuOpen ? 'text-white' : ''}`}>
                                <Logo />
                            </div>
                        </Link>
                        <Nav isMenuOpen={isMenuOpen} handleMenuClink={handleMenuClink} isHomepage={isHomepage} />
                    </div>
                </Container>
            </header>
        </Headroom>
    )
}

export default Header
