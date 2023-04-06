import Nav from '@/organisms/Nav'
import { Logo } from '@/atoms/Icons'
import Container from '@/layout/Container'
import Headroom from 'react-headroom'

const Header = () => {
    //96
    return (
        <Headroom>
            <header className='w-full h-auto py-5 bg-transparent text-white text-45 relative   '>
                <Container>
                    <div className='flex items-center justify-between 768:w-full '>
                        <div className='w-32 1280:w-40 shrink-0 h-max z-1'>
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
