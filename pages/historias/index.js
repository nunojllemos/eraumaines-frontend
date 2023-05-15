import { useRef } from 'react'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import ImageContainer from '@/components/atoms/ImageContainer'
import Link from 'next/link'
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
            slug: 'historias/single-1',
            date: '14-05-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Miguel e Joana',
            album: '/images/work-section-card-6.png',
            place: 'Lisboa',
            category: 'Photoshoot',
            slug: 'historias/single-2',
            date: '23-06-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Paula e José',
            album: '/images/work-section-card-4.png',
            place: 'Leiria',
            category: 'Photoshoot',
            slug: 'historias/single-3',
            date: '4-02-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: '/images/her-image.png',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: '/images/his-image.png',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: '/images/work-section-card-6.png',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: '/images/her-image.png',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: '/images/his-image.png',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: '/images/work-section-card-6.png',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
    ]

    const namesInfoSwiperOptions = {
        ref: namesInfoSwiperRef,
        className: 'max-h-[9em] text-24 768:text-28 1280:text-50 font-power-grotesk swiper-names-history  ',
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
            enabled: false,
            reverseDirection: true,
            disableOnInteraction: false,
            invert: true,
        },
        loop: true,
        modules: [Autoplay, Mousewheel, FreeMode],
        onInit: swiper => {
            console.log(swiper)
            swiper.activeIndex = 2
            swiper.update()
        },
        onTransitionEnd: swiper => albumSwiperRef.current.swiper.slidePrev(),
    }

    const contentSwiperOptions = {
        ref: albumSwiperRef,
        className: '!h-[calc(100vh_-_130px)]',
        direction: 'vertical',
        autoHeight: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 800,
        mousewheel: false,
        allowTouchMove: false,
        loop: true,
        rewind: false,
        centeredSlides: true,
        initialSlide: 2,
        freeMode: {
            enabled: true,
        },
        modules: [FreeMode],
    }

    return (
        <main>
            <Container>
                <Grid>
                    <Col mobileCols={1} tabletCols={6} desktopCols={7}>
                        <Swiper {...namesInfoSwiperOptions}>
                            {historias.map((historia, i) => (
                                <SwiperSlide key={i} onClick={() => console.log('clicked')}>
                                    <div>
                                        <p>{historia.name}</p>
                                        <div className='text-18 font-light font-subjectivity'>
                                            <p>{historia.category}</p>
                                            <p>{historia.place}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                    <Col mobileCols={1} tabletCols={6} desktopCols={5}>
                        <Swiper {...contentSwiperOptions}>
                            {historias.map((historia, i) => (
                                <SwiperSlide key={i}>
                                    <Link className='flex flex-col border-[red] border' href={historia.slug}>
                                        <p className='text-20 absolute top-0 left-0 z-10'>{historia.name}</p>
                                        <ImageContainer src={historia.album} aspectRatio='16/9' />
                                    </Link>
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
