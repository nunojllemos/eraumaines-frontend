import { useState, useEffect, useRef } from 'react'
import AboutText from '@/components/atoms/AboutText'
import ImageContainer from '@/components/atoms/ImageContainer'
import AboutPersonDetails from '@/components/molecules/AboutPersonDetails'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/mousewheel'
import { Autoplay, FreeMode, Mousewheel } from 'swiper'

const Nos = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const namesSwiperRef = useRef(null)
    const contentSwiperRef = useRef(null)

    const dummySlides = [
        {
            name: 'Nuno e Ana',
            content:
                'N&A: Lorem ipsum dolor sit amet, consectetur adipisu ding elit, sed do eiusmod tempor. Ipsum dolor sit amet, sectetur adipisu ding elit, sed do eiusm od tempor. Lorem ipsum dolor sit amet, consectetur adipisu ding elit, sed do eiusmod tempor. Ipsum dolor sit amet, sectetur adipisu ding elit, sed do eiusm od tempor.',
        },
        {
            name: 'Diogo e Inês',
            content: 'D&I: Lorem ipsum dolor sit amet, consectetur adipisu ding elit, sed do eiusmod tempor.',
        },
        {
            name: 'Ricardo e Carolina',
            content:
                'R&C: Lorem ipsum dolor sit amet, consectetur adipisu ding elit, sed do eiusmod tempor. Ipsum dolor sit amet, sectetur adipisu ding elit, sed do eiusm od tempor.',
        },
        {
            name: 'Simão e Tomás',
            content: 'S&T: Lorem ipsum dolor sit amet, consectetur adipisu ding elit, sed do eiusmod tempor. ',
        },
        {
            name: 'Liliana e Vera',
            content:
                'L&V: Lorem ipsum dolor sit amet, consectetur adipisu ding elit, sed do eiusmod tempor. Ipsum dolor sit amet, sectetur adipisu ding elit, sed do eiusm od tempor.',
        },
        {
            name: 'Pedro',
            content:
                'P: Lorem ipsum dolor sit amet, consectetur adipisu ding elit, sed do eiusmod tempor. Ipsum dolor sit amet, sectetur adipisu ding elit, sed do eiusm od tempor.',
        },
    ]

    const namesSwiperOptions = {
        ref: namesSwiperRef,
        className: 'max-h-[3em] text-[4.8rem] font-power-grotesk swiper-names',
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 0,
        mousewheel: true,
        // longSwipesRatio: 1,
        // speed: 800,
        freeMode: {
            enabled: true,
            sticky: true,
            minimumVelocity: 0.5,
        },
        autoplay: {
            enabled: false,
            invert: true,
        },
        loop: true,
        modules: [Autoplay, Mousewheel, FreeMode],
        onSlideChange: swiper => {
            if (swiper.realIndex !== activeSlide) {
                contentSwiperRef.current.swiper.slideTo(swiper.realIndex)
                contentSwiperRef.current.swiper.update()
                setActiveSlide(swiper.realIndex)
            }
        },
    }

    const contentSwiperOptions = {
        ref: contentSwiperRef,
        className: 'text-[4.8rem]',
        direction: 'vertical',
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        freeMode: {
            enabled: true,
            sticky: true,
            minimumVelocity: 0.5,
        },
        loop: true,
        modules: [Autoplay, Mousewheel, FreeMode],
        onSlideChange: swiper => {
            if (swiper.realIndex !== activeSlide) {
                namesSwiperRef.current.swiper.slideTo(swiper.realIndex)
                contentSwiperRef.current.swiper.update()
                setActiveSlide(swiper.realIndex)
            }
        },
    }

    return (
        <ParallaxProvider>
            <main className='pb-16'>
                <Container>
                    <Grid>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={2} desktopCols={9} offsetDesktop={3}>
                            <AboutText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </AboutText>
                        </Col>
                        <Col mobileCols={2} tabletCols={10} desktopCols={9}>
                            <div className='mt-12 768:mt-24 1280:mt-32'>
                                <AboutText>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</AboutText>
                            </div>
                        </Col>
                    </Grid>
                </Container>
                <section className='mt-12 768:mt-14'>
                    <AnimatedTitle>aos olhos do diogo . aos olhos do diogo . aos olhos do diogo . </AnimatedTitle>
                    <Container>
                        <div className='relative'>
                            <Grid>
                                <Col mobileCols={2} tabletCols={12} desktopCols={8}>
                                    <Parallax speed={-2} className='-z-1 relative'>
                                        <ImageContainer src='/images/her-image.png' aspectRatio='16/9' />
                                    </Parallax>
                                </Col>
                                <Col mobileCols={2} tabletCols={6} desktopCols={4}>
                                    <AboutPersonDetails name='Inês' role='Fotografia & Edição' />
                                </Col>
                                <div className='col-span-2 mt-12 768:mt-0 768:w-8/12 1024:w-7/12 768:absolute right-0 top-52 1024:top-80'>
                                    <AboutText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </AboutText>
                                </div>
                            </Grid>
                        </div>
                    </Container>
                </section>
                <section className='mt-14'>
                    <AnimatedTitle>aos olhos da inês . aos olhos da inês . aos olhos da inês . </AnimatedTitle>
                    <Container>
                        <div className='relative his-section'>
                            <Grid>
                                <Col mobileCols={2} tabletCols={6} desktopCols={4}>
                                    <AboutPersonDetails name='Diogo' role='Vídeo & Edição' />
                                </Col>
                                <Col mobileCols={2} tabletCols={12} desktopCols={8}>
                                    <Parallax speed={3}>
                                        <ImageContainer src='/images/his-image.png' aspectRatio='16/9' />
                                    </Parallax>
                                </Col>
                                <div className='col-span-2 mt-12 768:mt-0 768:w-8/12 1024:w-7/12 768:absolute right-0 top-52 1024:top-80'>
                                    <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</AboutText>
                                </div>
                            </Grid>
                        </div>
                    </Container>
                </section>
                <section className='mt-32'>
                    <Container>
                        <Grid>
                            <Col mobileCols={2} tabletCols={4}>
                                <Swiper {...namesSwiperOptions}>
                                    {dummySlides.map((slide, index) => {
                                        return <SwiperSlide key={index}>{slide.name}</SwiperSlide>
                                    })}
                                </Swiper>
                            </Col>
                            <Col mobileCols={2} tabletCols={8}>
                                <Swiper {...contentSwiperOptions}>
                                    {dummySlides.map((slide, index) => {
                                        return <SwiperSlide key={index}>{slide.content}</SwiperSlide>
                                    })}
                                </Swiper>
                            </Col>
                        </Grid>
                    </Container>
                </section>
            </main>
        </ParallaxProvider>
    )
}
export default Nos
