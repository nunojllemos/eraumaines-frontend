import { FaqArrow } from '@/components/atoms/Icons'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import useTranslation from '@/hooks/useTranslation'
import Link from 'next/link'

const FourOhFour = () => {
    const t = useTranslation()

    return (
        <main>
            <Container>
                <Grid>
                    <Col offsetDesktop={2} mobileCols={2} tabletCols={12} desktopCols={8}>
                        <div className='flex flex-col mt-32 768:mt-40'>
                            <h1 className='text-50 768:text-60 1024:text-80 font-power-grotesk'>
                                404: <span className='block'>{t.notFound.error}</span>
                            </h1>
                            <div className='text-18 768:text-24 mt-24 pt-14 leading-normal'>
                                <p>Sorry!</p>
                                <p className=''>{t.notFound.message}</p>
                            </div>
                            <div className='mt-12'>
                                <Link href='/' scroll={false}>
                                    <div className='default-text flex items-center gap-3 768:gap-6 group'>
                                        <div className='rotate-180 w-6 768:w-8 -mt-2 transition-transform fix-hover:group-hover:-translate-x-2'>
                                            <FaqArrow />
                                        </div>
                                        <span>{t.notFound.link}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default FourOhFour
