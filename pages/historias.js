import { useRef } from 'react'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import ImageContainer from '@/components/atoms/ImageContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/mousewheel'
import 'swiper/css/effect-fade'
import { Autoplay, FreeMode, Mousewheel, EffectFade } from 'swiper'

const Historias = () => {
    const namesInfoSwiperRef = useRef(null)
    const albumSwiperRef = useRef(null)

    const historias = [
        {
            name: 'Nuno e Ana',
            album: '/images/work-section-card-4.png',
            place: 'Porto',
            category: 'Casamento',
        },
        {
            name: 'Miguel e Joana',
            album: '/images/work-section-card-6.png',
            place: 'Lisboa',
            category: 'Photoshoot',
        },
        {
            name: 'Paula e José',
            album: '/images/work-section-card-4.png',
            place: 'Leiria',
            category: 'Photoshoot',
        },
        {
            name: 'Bruna e Rafael',
            album: '/images/her-image.png',
            place: 'Porto',
            category: 'Casamento',
        },
        {
            name: 'Tiago',
            album: '/images/his-image.png',
            place: 'Algarve',
            category: 'Batizado',
        },
        {
            name: 'Fábio e Catarina',
            album: '/images/work-section-card-6.png',
            place: 'Aves',
            category: 'Casamento',
        },
    ]

    const namesInfoSwiperOptions = {
        ref: namesInfoSwiperRef,
        className: 'max-h-[3em] text-24 768:text-28 1280:text-50 font-power-grotesk swiper-names mb-12',
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 0,
        mousewheel: true,
        speed: 800,
        freeMode: {
            enabled: true,
            sticky: true,
            minimumVelocity: 0.5,
        },
        autoplay: {
            enabled: true,
            reverseDirection: true,
            disableOnInteraction: false,
            invert: true,
        },
        loop: true,
        modules: [Autoplay, Mousewheel, FreeMode],
        // onSlideChange: () => contentSwiperRef.current.swiper.slidePrev(),
        onTransitionEnd: swiper => albumSwiperRef.current.swiper.slideTo(swiper.realIndex),
    }

    const contentSwiperOptions = {
        ref: albumSwiperRef,
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
        <main>
            <Container>
                <Grid>
                    <Col mobileCols={1} tabletCols={6} desktopCols={7}>
                        <Swiper {...namesInfoSwiperOptions}>
                            {historias.map((historia, i) => (
                                <SwiperSlide key={i}>
                                    <section className='text-12 768:text-22'>
                                        <p className='text-26 768:text-45'>{historia.name}</p>
                                        <p>{historia.category}</p>
                                        <p>{historia.place}</p>
                                    </section>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                    <Col mobileCols={1} tabletCols={6} desktopCols={5}>
                        <Swiper {...contentSwiperOptions}>
                            {historias.map((historia, i) => (
                                <SwiperSlide key={i}>
                                    <ImageContainer src={historia.album} aspectRatio='16/9' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default Historias
