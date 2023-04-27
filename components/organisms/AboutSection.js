import AnimatedTitle from '../molecules/AnimatedTitle'
import Container from '../styled-components/layout/Container'
import ImageContainer from '../atoms/ImageContainer'
import Marquee from 'react-fast-marquee'
import AboutSectionLink from '../molecules/AboutSectionLink'
import Link from 'next/link'
import Arrows from '../molecules/Arrows'

const AboutSection = () => {
    return (
        <div className='pt-12'>
            <AnimatedTitle isPrimary={false}>storytellers . storytellers . storytellers </AnimatedTitle>
            <Container>
                {/* Inês */}
                <div className='768:relative 768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] '>
                    <Link href='/nos' className='mb-24 col-span-2 768:col-start-7 768:col-span-4 768:row-start-1 1280:col-start-6 person-details w-max'>
                        <div className='flex hover-arrow items-baseline'>
                            <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none mb-3 '>Inês</h2>
                            <Arrows />
                        </div>
                        <p className='font-subjectivity default-text'>Fotografia & Edição</p>
                    </Link>
                    <div className='person-image overflow-hidden 768:overflow-visible max-h-[90vh] relative col-span-2 row-start-2 768:col-start-1 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5 hover-arrow 768:sticky top-8'>
                        <ImageContainer
                            src='https://source.unsplash.com/random?girls'
                            alt='foto Inês'
                            aspectRatio='2/3'
                            sizes='100vw, (min-width: 768px) 45vw'
                        />
                        <Link
                            href='/nos'
                            className='person-marquee 768:transition-opacity 768:fix-hover:hover:opacity-100 768:fix-hover:hover:pointer-events-auto absolute 768:opacity-0 768:pointer-events-none bottom-1 cursor-pointer 768:w-full 768:h-full 768:bg-white/80 768:top-0 768:left-0 768:flex 768:items-center'
                        >
                            <Marquee className='gap-22' gradient={false} speed={50}>
                                <AboutSectionLink gender='a' name='Inês' />
                            </Marquee>
                        </Link>
                    </div>
                    <div className='row-start-3 my-12 768:my-0 col-span-2 768:col-start-7 768:col-span-6 768:row-start-2 1280:col-start-6'>
                        <p className='text-28 768:text-36 1024:text-40 1280:text-52 '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, autem ex! Esse quod fugiat ea illo mollitia, consequatur deserunt
                            impedit vitae repellat odit sit labore quas, consectetur rerum beatae nulla.
                        </p>
                    </div>
                </div>

                {/* Diogo */}
                <div className='768:relative 768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] '>
                    <div className='mb-24 col-span-2 768:col-start-1 768:col-span-4 768:row-start-1 person-details  '>
                        <div className='flex hover-arrow items-baseline'>
                            <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none mb-3'>Diogo</h2>
                            <Arrows />
                        </div>
                        <p className='font-subjectivity default-text'>Fotografia & Edição</p>
                    </div>
                    <div className='person-image overflow-hidden 768:overflow-visible max-h-[90vh] 768:sticky top-8 relative col-span-2 row-start-2 768:col-start-7 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5 1280:col-start-8 hover-arrow'>
                        <ImageContainer
                            src='https://source.unsplash.com/random?man'
                            aspectRatio='2/3'
                            sizes='100vw, (min-width: 768px) 45vw'
                            alt='Foto Diogo'
                        />
                        <Link
                            href='/nos'
                            className='person-marquee 768:transition-opacity 768:fix-hover:hover:opacity-100 768:fix-hover:hover:pointer-events-auto absolute 768:opacity-0 768:pointer-events-none bottom-1 cursor-pointer 768:w-full 768:h-full 768:bg-white/80 768:top-0 768:left-0 768:flex 768:items-center'
                        >
                            <Marquee gradient={false} speed={50}>
                                <AboutSectionLink gender='o' name='Diogo' href='/nos' />
                            </Marquee>
                        </Link>
                    </div>
                    <div className='row-start-3 my-12 768:my-0  col-span-2 768:col-start-1 768:col-span-6 768:row-start-2 '>
                        <p className='text-32 768:text-44 1280:text-60'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat accusantium eius nemo, ipsa deleniti natus ad unde
                            necessitatibus iste, consequatur amet ut vitae impedit cum laboriosam id odio corrupti.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default AboutSection
