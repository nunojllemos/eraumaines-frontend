import { useState, useEffect, useRef } from 'react'
import AboutText from '@/components/atoms/AboutText'
import ImageContainer from '@/components/atoms/ImageContainer'
import AboutPersonDetails from '@/components/molecules/AboutPersonDetails'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
/* import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
 */ import { Swiper, SwiperSlide } from 'swiper/react'
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
        <>
            {/* <ParallaxProvider>
                <main className='pb-16'>
                    <Container>
                        <Grid>
                            <Col desktopCols={9} offsetDesktop={3}>
                                <p className='text-60 font-light'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Col>
                            <Col desktopCols={9}>
                                <p className='text-60 mt-32 font-light'>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                        </Grid>
                    </Container>
                    <section className='mt-14'>
                        <AnimatedTitle>aos olhos do diogo . aos olhos do diogo . aos olhos do diogo . </AnimatedTitle>
                        <Container>
                            <div className='relative'>
                                <Grid>
                                    <Col desktopCols={8}>
                                        <Parallax speed={15}>
                                            <ImageContainer src='/images/her-image.png' aspectRatio='16/9' />
                                        </Parallax>
                                    </Col>
                                    <Col desktopCols={4}>
                                        <h2 className='font-power-grotesk text-90 leading-none'>Inês</h2>
                                        <span className='default-text font-light'>Fotografia & Edição</span>
                                    </Col>
                                    <div className='w-1/2 absolute right-0 bottom-0'>
                                        <p className='text-60 font-light'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                    </div>
                                </Grid>
                            </div>
                        </Container>
                    </section>
                    <section className='mt-14'>
                        <AnimatedTitle>aos olhos da inês . aos olhos da inês . aos olhos da inês . </AnimatedTitle>
                        <Container>
                            <div className='relative'>
                                <Grid>
                                    <Col desktopCols={4}>
                                        <h2 className='font-power-grotesk text-90 leading-none'>Diogo</h2>
                                        <span className='default-text font-light'>Vídeo & Edição</span>
                                    </Col>
                                    <Col desktopCols={8}>
                                        <Parallax speed={5}>
                                            <ImageContainer src='/images/him-image.png' aspectRatio='16/9' />
                                        </Parallax>
                                    </Col>
                                    <div className='w-1/2 absolute left-0 top-80'>
                                        <p className='text-60 font-light'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                            <br />
                                            <br />
                                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </Grid>
                            </div>
                        </Container>
                    </section>
                </main>
            </ParallaxProvider> */}
        </>
    )
}
export default Nos
