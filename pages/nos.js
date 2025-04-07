import { useRef } from 'react'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, EffectFade } from 'swiper'
import useTranslation from '@/hooks/useTranslation'
import AboutPersonSection from '@/components/organisms/AboutPersonSection'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import { getImage } from '@/utils/utils'
import { ScrollParallax } from 'react-just-parallax'

const Nos = ({ data }) => {
    const PARALLAX_STRENGTH = 0.04

    const t = useTranslation()
    const namesSwiperRef = useRef(null)
    const contentSwiperRef = useRef(null)
    const description = data?.description
    const persons = data?.persons
    const reviews = data?.reviews
    const images = data?.images?.data
    const firstImage = images?.[0]?.attributes?.url
    const secondImage = images?.[1]?.attributes?.url
    const thirdImage = images?.[2]?.attributes?.url

    const namesSwiperOptions = {
        ref: namesSwiperRef,
        className: 'h-[3.75em] text-24 768:text-28 font-rial swiper-names mb-12',
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 0,
        modules: [Autoplay],
        speed: 1000,
        autoplay: {
            disableOnInteraction: false,
        },
        loop: true,
        onTransitionEnd: swiper => contentSwiperRef?.current?.swiper?.slideTo(swiper.realIndex),
    }

    const contentSwiperOptions = {
        ref: contentSwiperRef,
        className: 'text-24 768:text-32 1280:text-50',
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        mousewheel: false,
        allowTouchMove: false,
        loop: true,
        rewind: false,
        modules: [EffectFade],
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    }

    return (
        <>
            <main className='py-24'>
                <section className='mb-32 768:mb-64'>
                    {description && (
                        <Container>
                            <Grid>
                                <Col mobileCols={12} desktopCols={9} offsetDesktop={2}>
                                    <div className='1024:p-32'>
                                        <div className='grid grid-cols-2 relative z-1'>
                                            <div className='relative aspect-[3/4] ml-8 1024:ml-16'>
                                                <ScrollParallax strength={0.3}>
                                                    <Image fill src={getImage(firstImage)} alt='' className='object-cover' />
                                                </ScrollParallax>
                                            </div>
                                            <div className='relative aspect-[3/4] ml-4 1024:ml-24 mr-4 1024:mr-12'>
                                                <ScrollParallax strength={0.4}>
                                                    <Image fill src={getImage(secondImage)} alt='' className='object-cover' />
                                                </ScrollParallax>
                                            </div>
                                        </div>
                                        <div className='relative aspect-video mt-48 1024:mt-16 z-0'>
                                            <ScrollParallax strength={0.25}>
                                                <Image fill src={getImage(thirdImage)} alt='' className='object-cover' />
                                            </ScrollParallax>
                                        </div>
                                    </div>
                                    <div className='text-24 768:text-32 font-light leading-snug mt-48 relative'>
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                                    </div>
                                </Col>
                            </Grid>
                        </Container>
                    )}
                </section>
                {persons?.length > 0 &&
                    persons.map((person, index) => {
                        const { id, title, name, role, media, description } = person || {}
                        const url = media?.data?.attributes?.url

                        return (
                            <AboutPersonSection
                                key={`about-person-${id}`}
                                isLeft={index % 2 === 0}
                                title={title}
                                name={name}
                                role={role}
                                description={description}
                                url={url}
                            />
                        )
                    })}
                {reviews?.data?.length > 0 && (
                    <section>
                        <AnimatedTitle>{`${t.about.reviews} . ${t.about.reviews} . ${t.about.reviews} . `}</AnimatedTitle>
                        <Container>
                            <Grid className='pt-12 768:pt-24 1024:pt-48'>
                                <div className='col-span-2 768:col-span-8 768:col-start-3 1366:col-span-4 1366:col-start-2'>
                                    <Swiper {...namesSwiperOptions}>
                                        {reviews.data.map(slide => {
                                            const { id, attributes } = slide
                                            const { author } = attributes

                                            return (
                                                <SwiperSlide key={`name-slide-${id}`}>
                                                    <span className='block leading-tight'>{author}</span>
                                                </SwiperSlide>
                                            )
                                        })}
                                        {reviews.data.map(slide => {
                                            const { id, attributes } = slide
                                            const { author } = attributes

                                            return (
                                                <SwiperSlide key={`name-slide-${id}`}>
                                                    <span className='block leading-tight'>{author}</span>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                                <div className='mt-12 1366:mt-0 col-span-2 768:col-span-8 768:col-start-3 1366:col-span-4 1366:col-start-7'>
                                    <Swiper {...contentSwiperOptions}>
                                        {reviews.data.map(slide => {
                                            const { id, attributes } = slide
                                            const { content } = attributes

                                            return (
                                                <SwiperSlide
                                                    key={`content-slide-${id}`}
                                                    className='text-16 768:text-22 font-light leading-tight text-justify !transition-all'
                                                >
                                                    {content}
                                                </SwiperSlide>
                                            )
                                        })}
                                        {reviews.data.map(slide => {
                                            const { id, attributes } = slide
                                            const { content } = attributes

                                            return (
                                                <SwiperSlide
                                                    key={`content-slide-${id}`}
                                                    className='text-16 768:text-22 font-light leading-tight text-justify !transition-all'
                                                >
                                                    {content}
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </Grid>
                        </Container>
                    </section>
                )}
            </main>
        </>
    )
}
export default Nos

export async function getStaticProps(context) {
    const { locale } = context

    const populateQuery = 'populate=*,persons,persons.media,reviews,images'
    const baseApi = process.env.NEXT_PUBLIC_API_URL
    const contentType = 'about'
    const localeQuery = `locale=${locale}`

    const res = await fetch(`${baseApi}/${contentType}?${localeQuery}&${populateQuery}`)
    const data = await res.json()

    return {
        props: {
            data: data?.data?.attributes || null,
        },
        revalidate: 10,
    }
}
