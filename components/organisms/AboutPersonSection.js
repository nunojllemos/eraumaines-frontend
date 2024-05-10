import Container from '@/layout/Container'
import Grid from '@/layout/Grid'
import Col from '@/layout/Col'
import ImageContainer from '@/atoms/ImageContainer'
import AnimatedTitle from '@/molecules/AnimatedTitle'
import AboutDescription from '@/atoms/AboutDescription'
import { MouseParallax } from 'react-just-parallax'
import { getImage } from '@/utils/utils'

const AboutPersonSection = ({ isLeft, title, description, url, name, role }) => {
    return isLeft ? (
        <section className='mt-14'>
            <AnimatedTitle>{`${title} . ${title} . ${title} . `}</AnimatedTitle>
            <Container>
                <div className='relative pb-4'>
                    <Grid>
                        <Col className='z-0 row-start-2 1280:row-start-1 my-12 768:my-0' mobileCols={2} tabletCols={12} desktopCols={8}>
                            {url && (
                                <MouseParallax strength={0.04}>
                                    <ImageContainer src={getImage(url)} aspectRatio='16/9' />
                                </MouseParallax>
                            )}
                        </Col>
                        <Col className='z-1' mobileCols={2} tabletCols={12} desktopCols={4}>
                            <h2 className='relative font-power-grotesk text-50 768:text-70 1280:text-90 leading-none'>{name}</h2>
                            <span className='relative default-text font-light'>{role}</span>
                            <div className='hidden 1024:block'>
                                <AboutDescription description={description} />
                            </div>
                        </Col>
                        <div className='1024:hidden col-span-2 768:col-span-12'>
                            <AboutDescription description={description} />
                        </div>
                    </Grid>
                </div>
            </Container>
        </section>
    ) : (
        <section className='mt-14'>
            <AnimatedTitle>{`${title} . ${title} . ${title} . `}</AnimatedTitle>
            <Container>
                <div className='relative'>
                    <Grid>
                        <Col className='z-1' mobileCols={2} tabletCols={12} desktopCols={4}>
                            <h2 className='relative font-power-grotesk text-50 768:text-70 1280:text-90 leading-none'>{name}</h2>
                            <span className='relative block default-text font-light'>{role}</span>
                            <div className='hidden 1024:block'>
                                <AboutDescription description={description} />
                            </div>
                        </Col>
                        <Col className='z-0 my-12 768:my-0' mobileCols={2} tabletCols={12} desktopCols={8}>
                            <MouseParallax strength={0.04}>
                                <ImageContainer src={getImage(url)} aspectRatio='16/9' />
                            </MouseParallax>
                        </Col>
                        <div className='1024:hidden col-span-2 768:col-span-12'>
                            <AboutDescription description={description} />
                        </div>
                    </Grid>
                </div>
            </Container>
        </section>
    )
}
export default AboutPersonSection
