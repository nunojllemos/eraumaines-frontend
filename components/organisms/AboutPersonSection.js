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
                        <Col className='row-start-2 768:row-start-1 my-12 768:my-0' mobileCols={2} tabletCols={8}>
                            <MouseParallax strength={0.04}>
                                <ImageContainer src={`/${getImage(url)}`} aspectRatio='16/9' />
                            </MouseParallax>
                        </Col>
                        <Col mobileCols={2} tabletCols={4}>
                            <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none'>{name}</h2>
                            <span className='default-text font-light'>{role}</span>
                        </Col>
                        <div className='col-span-2 768:w-3/4 1024:w-1/2 768:absolute right-0 top-44 1280:top-[unset] 1280:bottom-0'>
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
                        <Col mobileCols={2} tabletCols={4}>
                            <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none'>{name}</h2>
                            <span className='block default-text font-light'>{role}</span>
                        </Col>
                        <Col className='my-12 768:my-0' mobileCols={2} tabletCols={8}>
                            <MouseParallax strength={0.04}>
                                <ImageContainer src={getImage(url)} aspectRatio='16/9' />
                            </MouseParallax>
                        </Col>
                        <div className='col-span-2 768:w-3/4 1024:w-1/2 768:absolute left-0 top-44 1280:bottom-0 1280:top-[unset]'>
                            <AboutDescription description={description} />
                        </div>
                    </Grid>
                </div>
            </Container>
        </section>
    )
}
export default AboutPersonSection
