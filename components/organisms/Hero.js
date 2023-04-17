import HeroVideo from '@/atoms/HeroVideo'
import { Mute } from '@/atoms/Icons'
import InternalLink from '@/molecules/InternalLink'
import Container from '../styled-components/layout/Container'

const Hero = ({ title }) => {
    return (
        <div className='h-screen mt-[-87px] 1280:mt-[-97px] relative'>
            <div className='absolute top-0 h-full w-full z-[-1]'>
                <HeroVideo />
            </div>
            <div className='h-full w-full absolute flex flex-col justify-end  text-white pb-5'>
                <Container>
                    <h1 className='font-maginia w-[300px] text-80 768:text-100 1280:text-130 leading-none'>{title}</h1>
                    <div className='flex items-center justify-between mt-20'>
                        <div className='hover-arrow'>
                            <InternalLink href='/historias' text='ver mais histórias' />
                        </div>
                        <button className='hover-mute flex items-center justify-center bg-white text-black w-14 h-14 rounded-full'>
                            <div className='w-8'>
                                <Mute />
                            </div>
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
