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
    const { description_01, description_02, persons, reviews } = data

    const namesSwiperOptions = {
        ref: namesSwiperRef,
        className: 'h-[3.75em] text-24 768:text-28 1280:text-50 font-power-grotesk swiper-names mb-12',
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
        speed: 800,
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
            <main className='pb-16'>
                {(description_01 || description_02) && (
                    <Container>
                        <Grid>
                            <Col mobileCols={2} tabletCols={9} offsetTablet={3}>
                                {description_01 && <p className='text-24 768:text-32 1280:text-50 font-light'>{description_01}</p>}
                            </Col>
                            <Col mobileCols={2} tabletCols={9}>
                                {description_02 && <p className='text-24 768:text-32 1280:text-50 mt-16 768:mt-20 1280:mt-32 font-light'>{description_02}</p>}
                            </Col>
                        </Grid>
                    </Container>
                )}
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
                {reviews.data.length > 0 && (
                    <section className='mt-14 768:mt-32'>
                        <AnimatedTitle>{`${t.about.reviews} . ${t.about.reviews} . ${t.about.reviews} . `}</AnimatedTitle>
                        <Container>
                            <Grid>
                                <Col mobileCols={2} tabletCols={5} desktopCols={4}>
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
                                    </Swiper>
                                </Col>
                                <Col mobileCols={2} tabletCols={7} desktopCols={8}>
                                    <Swiper {...contentSwiperOptions}>
                                        {reviews.data.map(slide => {
                                            const { id, attributes } = slide
                                            const { content } = attributes

                                            return (
                                                <SwiperSlide key={`content-slide-${id}`} className='font-light leading-tight'>
                                                    {content}
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </Col>
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
    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const populateQuery = 'populate=*,persons,persons.media,reviews'
    const baseApi = process.env.NEXT_PUBLIC_API_URL
    const contentType = 'about'
    const localeQuery = `locale=${strapiLocale}`

    const res = await fetch(`${baseApi}/${contentType}?${localeQuery}&${populateQuery}`)
    const data = await res.json()

    return {
        props: {
            data: data.data.attributes,
        },
        revalidate: 10,
    }
}
