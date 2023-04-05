import Nav from '@/organisms/Nav'
import { Logo } from '@/atoms/Icons'
import Container from '@/layout/Container'
import Headroom from 'react-headroom'

const Header = () => {
    return (
        <Headroom>
            <header className='w-full h-auto py-5 bg-transparent text-white text-45 relative  '>
                <Container>
                    <div className='flex items-center justify-between 1024:w-full '>
                        <div className='w-40 z-1'>
                            <Logo />
                        </div>
                        <Nav />
                    </div>
                </Container>
            </header>
        </Headroom>
    )
}

export default Header
