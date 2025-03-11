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

const Nos = ({ data }) => {
    const t = useTranslation()
    const namesSwiperRef = useRef(null)
    const contentSwiperRef = useRef(null)
    const description = data?.description
    const persons = data?.persons
    const reviews = data?.reviews

    console.log(description)

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
                                <Col desktopCols={9} offsetDesktop={2}>
                                    <p className='text-24 768:text-32 font-light leading-snug'>{description}</p>
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

    const populateQuery = 'populate=*,persons,persons.media,reviews'
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
