import Container from '@/layout/Container'
import Grid from '@/layout/Grid'
import ImageContainer from '@/atoms/ImageContainer'
import AnimatedTitle from '@/molecules/AnimatedTitle'
import AboutDescription from '@/atoms/AboutDescription'
import { MouseParallax } from 'react-just-parallax'
import { getImage, slugify } from '@/utils/utils'
import HomePersonRole from '../atoms/HomePersonRole'
import HomePersonName from '../atoms/HomePersonName'

const AboutPersonSection = ({ isLeft, title, description, url, name, role }) => {
    const ASPECT_RATIO = '3/4'
    const PARALLAX_STRENGTH = 0.04

    return (
        <section className='1024:mt-14 1280:mt-24' id={slugify(name)}>
            <AnimatedTitle>{`${title} . ${title} . ${title} . `}</AnimatedTitle>
            <Container>
                <div className='relative pb-4'>
                    <Grid className='py-16 768:py-24 1024:py-48 items-center gap-'>
                        {isLeft ? (
                            <>
                                <div className='z-0 my-8 768:my-24 1366:my-0 row-start-2 col-span-2 768:col-span-8 768:col-start-3 1366:col-span-4 1366:col-start-3 1366:row-start-1'>
                                    {url && (
                                        <MouseParallax strength={PARALLAX_STRENGTH}>
                                            <ImageContainer forceHeight={false} src={getImage(url)} aspectRatio={ASPECT_RATIO} />
                                        </MouseParallax>
                                    )}
                                </div>
                                <div className='z-0 row-start-1 768:my-0 col-span-2 768:col-span-8 768:col-start-3 1366:col-span-4 1440:col-span-3 1440:col-start-9 1366:col-start-8'>
                                    <HomePersonName name={name} />
                                    <HomePersonRole role={role} />
                                    <div className='hidden 1366:block text-justify'>
                                        <AboutDescription description={description} />
                                    </div>
                                </div>
                                <div className='1366:hidden col-span-2 768:col-span-8 768:col-start-3'>
                                    <AboutDescription description={description} />
                                </div>{' '}
                            </>
                        ) : (
                            <>
                                <div className='z-0 1366:my-0 row-start-1 col-span-2 768:col-span-8 768:col-start-3 1366:col-span-4 1440:col-span-3 1366:col-start-2 1366:row-start-1 1440:col-start-2'>
                                    <HomePersonName name={name} />
                                    <HomePersonRole role={role} />
                                    <div className='hidden 1366:block text-justify'>
                                        <AboutDescription description={description} />
                                    </div>
                                </div>
                                <div className='z-0 my-8 768:my-24 1366:my-0 row-start-2 col-span-2 768:col-span-8 768:col-start-3 1366:col-span-4 1366:col-start-7 1366:row-start-1'>
                                    <MouseParallax strength={PARALLAX_STRENGTH}>
                                        <ImageContainer forceHeight={false} src={getImage(url)} aspectRatio={ASPECT_RATIO} />
                                    </MouseParallax>
                                </div>
                                <div className='1366:hidden col-span-2 768:col-span-8 768:col-start-3'>
                                    <AboutDescription description={description} />
                                </div>
                            </>
                        )}
                    </Grid>
                </div>
            </Container>
        </section>
    )
}
export default AboutPersonSection
