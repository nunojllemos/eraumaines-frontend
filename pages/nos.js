import { useState, useRef } from 'react'
import ImageContainer from '@/components/atoms/ImageContainer'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/mousewheel'
import { Autoplay, FreeMode, Mousewheel } from 'swiper'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'

const Nos = () => {
    const [isFirstSwipe, setIsFirstSwipe] = useState(true)
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
        onSlideChange: () => {
            contentSwiperRef.current.swiper.slideNext()
            setIsFirstSwipe(false)
        },
    }

    const contentSwiperOptions = {
        key: isFirstSwipe,
        ref: contentSwiperRef,
        className: 'text-24 768:text-32 1280:text-50 max-h-[18em] 768:max-h-[12em]',
        direction: 'vertical',
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        mousewheel: false,
        loop: true,
        rewind: false,
    }

    return (
        <>
            <main className='pb-16'>
                <Container>
                    <Grid>
                        <Col mobileCols={2} tabletCols={9} offsetTablet={3}>
                            <p className='text-24 768:text-32 1280:text-50 font-light'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Col>
                        <Col mobileCols={2} tabletCols={9}>
                            <p className='text-24 768:text-32 1280:text-50 mt-16 768:mt-20 1280:mt-32 font-light'>
                                Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Col>
                    </Grid>
                </Container>
                <section className='mt-14'>
                    <AnimatedTitle>aos olhos do diogo . aos olhos do diogo . aos olhos do diogo . </AnimatedTitle>
                    <Container>
                        <div className='relative pb-4'>
                            <Grid>
                                <Col className='row-start-2 768:row-start-1 my-12 768:my-0' mobileCols={2} tabletCols={8}>
                                    <MouseParallax strength={0.04}>
                                        <ImageContainer src='/images/her-image.png' aspectRatio='16/9' />
                                    </MouseParallax>
                                </Col>
                                <Col mobileCols={2} tabletCols={4}>
                                    <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none'>Inês</h2>
                                    <span className='default-text font-light'>Fotografia & Edição</span>
                                </Col>
                                <div className='col-span-2 768:w-3/4 1024:w-1/2 768:absolute right-0 top-44 1280:top-[unset] 1280:bottom-0'>
                                    <p className='text-24 768:text-32 1280:text-50 font-light'>
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
                                <Col mobileCols={2} tabletCols={4}>
                                    <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none'>Diogo</h2>
                                    <span className='block default-text font-light'>Vídeo & Edição</span>
                                </Col>
                                <Col className='my-12 768:my-0' mobileCols={2} tabletCols={8}>
                                    <MouseParallax strength={0.04}>
                                        <ImageContainer src='/images/him-image.png' aspectRatio='16/9' />
                                    </MouseParallax>
                                </Col>
                                <div className='col-span-2 768:w-3/4 1024:w-1/2 768:absolute left-0 top-44 1280:bottom-0 1280:top-[unset]'>
                                    <p className='text-24 768:text-32 1280:text-50 font-light'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                </div>
                            </Grid>
                        </div>
                    </Container>
                </section>
                <section className='mt-14 768:mt-32'>
                    <AnimatedTitle>testemunhos . testemunhos . testemunhos . </AnimatedTitle>
                    <Container>
                        <Grid>
                            <Col mobileCols={2} tabletCols={5} desktopCols={4}>
                                <Swiper {...namesSwiperOptions}>
                                    {dummySlides.map((slide, index) => (
                                        <SwiperSlide key={index}>{slide.name}</SwiperSlide>
                                    ))}
                                </Swiper>
                            </Col>
                            <Col mobileCols={2} tabletCols={7} desktopCols={8}>
                                <Swiper {...contentSwiperOptions}>
                                    {isFirstSwipe && <SwiperSlide>{dummySlides[0].content}</SwiperSlide>}
                                    {dummySlides
                                        .slice(0)
                                        .reverse()
                                        .map((slide, index) => (
                                            <SwiperSlide key={index}>{slide.content}</SwiperSlide>
                                        ))}
                                </Swiper>
                            </Col>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}
export default Nos
