import { useEffect, useState } from 'react'
import HeroVideo from '@/atoms/HeroVideo'
import { Mute, Volume } from '@/atoms/Icons'
import InternalLink from '@/molecules/InternalLink'
import Container from '@/layout/Container'
import useTranslation from '@/hooks/useTranslation'

const Hero = ({ title, media, typeOfMedia }) => {
    const t = useTranslation()
    const [isMuted, setIsMuted] = useState(true)

    const handleMute = () => setIsMuted(prev => !prev)
    const isVideo = typeOfMedia?.includes('video')

    return (
        <div className='h-[90vh] 1024:h-screen mt-[-87px] 1280:mt-[-97px] relative'>
            <div className='absolute top-0 h-full w-full z-[-1]'>
                <HeroVideo media={media} typeOfMedia={typeOfMedia} isMuted={isMuted} />
            </div>
            <div className='h-full w-full absolute flex flex-col justify-end text-[var(--text-color)] pb-5'>
                <Container>
                    {title && <h1 className='font-rial w-1/2 768:w-[300px] text-70 768:text-100 1280:text-120'>{title}</h1>}
                    <div className='flex items-center justify-between mt-20'>
                        <div className='hover-arrow'>
                            <InternalLink href='/historias' text={t.homepage.hero.link} />
                        </div>
                        {isVideo && (
                            <button
                                onClick={handleMute}
                                className='transition-colors flex items-center justify-center bg-[var(--text-color)] text-[var(--background-color)] w-14 h-14 rounded-full fix-hover:hover:bg-[var(--background-color)] fix-hover:hover:text-[var(--text-color)]'
                            >
                                <div className='w-8'>{isMuted ? <Volume /> : <Mute />}</div>
                            </button>
                        )}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
