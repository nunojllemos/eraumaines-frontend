import ImageContainer from '@/components/atoms/ImageContainer'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

const Nos = () => {
    return (
        <ParallaxProvider>
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
        </ParallaxProvider>
    )
}
export default Nos
