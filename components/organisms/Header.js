import Nav from '@/organisms/Nav'
import { Logo } from '@/atoms/Icons'
import Container from '@/layout/Container'
import Headroom from 'react-headroom'

const Header = () => {
    return (
        <Headroom>
            <header className='w-full h-auto py-5'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='text-white w-28 z-1'>
                            {/* [ ] verificar se este text-color está certo em relação ao logo*/}
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
