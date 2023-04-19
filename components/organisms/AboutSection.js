import AnimatedTitle from '../molecules/AnimatedTitle'
import Container from '../styled-components/layout/Container'
import ImageContainer from '../atoms/ImageContainer'
import InternalLink from '../molecules/InternalLink'
import Marquee from 'react-fast-marquee'
import AboutSectionLink from '../molecules/AboutSectionLink'

const AboutSection = () => {
    return (
        <div className='pt-12'>
            <AnimatedTitle isPrimary={false}>storytellers . storytellers . storytellers </AnimatedTitle>
            <Container>
                {/* Inês */}
                <div className='768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] '>
                    <div className='test mb-24 col-span-2 768:col-start-7 768:col-span-4 768:row-start-1 1280:col-start-6'>
                        <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none mb-3'>Inês</h2>
                        <p className='font-subjectivity default-text'>Fotografia & Edição</p>
                    </div>
                    <div className='col-span-2 row-start-2 768:col-start-1 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5'>
                        <div className='relative'>
                            <ImageContainer
                                src='https://source.unsplash.com/random?girl'
                                alt='foto Inês'
                                aspectRatio='2/3'
                                sizes='100vw, (min-width: 768px) 45vw'
                            />
                            <div className='absolute bottom-1 flex 768:hidden cursor-pointer'>
                                <Marquee gradient={false} speed={50}>
                                    <AboutSectionLink name='a Inês' link='/' />
                                </Marquee>
                            </div>
                        </div>
                    </div>
                    <div className='row-start-3 my-12 768:my-0  col-span-2 768:col-start-7 768:col-span-6 768:row-start-2 1280:col-start-6'>
                        <p className='text-32 768:text-44 1280:text-60 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab accusantium alias saepe.
                        </p>
                    </div>
                </div>

                {/* Diogo */}
                <div className='768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] '>
                    <div className='mb-24 col-span-2 768:col-start-1 768:col-span-4 768:row-start-1'>
                        <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none mb-3'>Diogo</h2>
                        <p className='font-subjectivity default-text'>Video & Edição</p>
                    </div>
                    <div className='col-span-2 row-start-2 768:col-start-7 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5 1280:col-start-8'>
                        <div className='relative'>
                            <ImageContainer
                                src='https://source.unsplash.com/random?man'
                                aspectRatio='2/3'
                                sizes='100vw, (min-width: 768px) 45vw'
                                alt='Foto Diogo'
                            />
                            <div className='absolute bottom-1 flex 768:hidden cursor-pointer'>
                                <Marquee gradient={false} speed={50}>
                                    <AboutSectionLink name='o Diogo' link='/' />
                                </Marquee>
                            </div>
                        </div>
                    </div>
                    <div className='row-start-3 my-12 768:my-0  col-span-2 768:col-start-1 768:col-span-6 768:row-start-2 '>
                        <p className='text-32 768:text-44 1280:text-60 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab accusantium alias saepe.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default AboutSection
