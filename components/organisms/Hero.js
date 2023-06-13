import { useState } from 'react'
import HeroVideo from '@/atoms/HeroVideo'
import { Mute, Volume } from '@/atoms/Icons'
import InternalLink from '@/molecules/InternalLink'
import Container from '@/layout/Container'
import useTranslation from '@/hooks/useTranslation'

const Hero = ({ title, media, typeOfMedia }) => {
    const t = useTranslation()
    const [isMuted, setIsMuted] = useState(true)

    const handleMute = () => setIsMuted(prev => !prev)

    return (
        <div className='h-[90vh] 1024:h-screen mt-[-87px] 1280:mt-[-97px] relative'>
            <div className='absolute top-0 h-full w-full z-[-1]'>
                <HeroVideo media={media} typeOfMedia={typeOfMedia} isMuted={isMuted} />
            </div>
            <div className='h-full w-full absolute flex flex-col justify-end  text-white pb-5'>
                <Container>
                    {title && <h1 className='font-maginia w-1/2 768:w-[300px] text-80 768:text-100 1280:text-130 leading-[0.85] 768:leading-none'>{title}</h1>}
                    <div className='flex items-center justify-between mt-20'>
                        <div className='hover-arrow'>
                            <InternalLink href='/historias' text={t.homepage.hero.link} />
                        </div>
                        <button
                            onClick={handleMute}
                            className='transition-colors flex items-center justify-center bg-white text-black w-14 h-14 rounded-full fix-hover:hover:bg-black fix-hover:hover:text-white'
                        >
                            <div className='w-8'>{isMuted ? <Volume /> : <Mute />}</div>
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
