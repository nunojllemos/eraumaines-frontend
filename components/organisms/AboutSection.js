import Link from 'next/link'
import Container from '@/layout/Container'
import HomePersonName from '@/atoms/HomePersonName'
import ImageContainer from '@/atoms/ImageContainer'
import AnimatedTitle from '@/molecules/AnimatedTitle'
import Arrows from '@/molecules/Arrows'
import HomePersonDescription from '../atoms/HomePersonDescription'
import HomePersonRole from '../atoms/HomePersonRole'
import HomePersonMarqueeSection from '../molecules/HomePersonMarqueeSection'

const AboutSection = ({ title, persons }) => {
    return (
        <div className='pt-12'>
            <AnimatedTitle isPrimary={false}>
                {title} . {title} . {title} . {title} .
            </AnimatedTitle>
            <Container>
                {/* Inês */}
                <div className='768:relative 768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] '>
                    <Link href='/nos' className='mb-24 col-span-2 768:col-start-7 768:col-span-4 768:row-start-1 1280:col-start-6 person-details w-max '>
                        <div className='flex hover-arrow items-baseline'>
                            <HomePersonName name='Inês' />
                            <Arrows />
                        </div>
                        <HomePersonRole role='Fotografia & Edição' />
                    </Link>
                    <div className='person-image overflow-hidden 768:overflow-visible max-h-[90vh] relative col-span-2 row-start-2 768:col-start-1 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5 hover-arrow 768:static'>
                        <ImageContainer
                            src='https://source.unsplash.com/random?girls'
                            alt='foto Inês'
                            aspectRatio='2/3'
                            sizes='100vw, (min-width: 768px) 45vw'
                        />
                        <HomePersonMarqueeSection name='Inês' href='/nos' />
                    </div>
                    <div className='row-start-3 my-12 768:my-0 col-span-2 768:col-start-7 768:col-span-6 768:row-start-2 1280:col-start-6'>
                        <HomePersonDescription
                            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, autem ex! Esse quod fugiat ea illo mollitia, consequatur deserunt
                            impedit vitae repellat odit sit labore quas, consectetur rerum beatae nulla.'
                        />
                    </div>
                </div>

                {/* Diogo */}
                <div className='768:relative 768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] '>
                    <Link href='/nos' className='mb-24 col-span-2 768:col-start-1 768:col-span-4 768:row-start-1 person-details w-max '>
                        <div className='flex hover-arrow items-baseline'>
                            <HomePersonName name='Diogo' />
                            <Arrows />
                        </div>
                        <HomePersonRole role='Vídeo & Edição' />
                    </Link>
                    <div className='person-image overflow-hidden 768:overflow-visible max-h-[90vh] 768:static relative col-span-2 row-start-2 768:col-start-7 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5 1280:col-start-8 hover-arrow'>
                        <ImageContainer
                            src='https://source.unsplash.com/random?man'
                            aspectRatio='2/3'
                            sizes='100vw, (min-width: 768px) 45vw'
                            alt='Foto Diogo'
                        />
                        <HomePersonMarqueeSection name='Diogo' href='/nos' />
                    </div>
                    <div className='row-start-3 my-12 768:my-0  col-span-2 768:col-start-1 768:col-span-6 768:row-start-2 '>
                        <HomePersonDescription
                            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, autem ex! Esse quod fugiat ea illo mollitia, consequatur deserunt
                            impedit vitae repellat odit sit labore quas, consectetur rerum beatae nulla.'
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default AboutSection
