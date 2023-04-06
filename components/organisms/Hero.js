import Video from '../atoms/Video'
import { Arrow, Mute } from '../atoms/Icons'
import Container from '../styled-components/layout/Container'

const Main = () => {
    return (
        <>
            <div className='absolute top-0 h-screen w-screen z-[-1]'>
                <Video />
            </div>
            <Container>
                <div className='h-[calc(100vh-100px)] flex flex-col justify-end  text-white pb-5'>
                    <h2 className='font-maginia w-[300px] text-80 1024:text-100 1440:text-130'>histórias com arte.</h2>
                    <div className='flex items-center justify-between mt-20'>
                        <div className='flex items-center'>
                            <p className='text-20 1024:text-22 1440:text-26 uppercase mr-2 mt-2 leading-none'>ver mais histórias</p>
                            <div className='w-7 h-max -rotate-45'>
                                <Arrow />
                            </div>
                        </div>
                        <button className='flex items-center justify-center bg-white w-14 h-14 rounded-full'>
                            <div className='w-8 '>
                                <Mute />
                            </div>
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Main
