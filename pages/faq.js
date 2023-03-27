import ImageContainer from '@/components/atoms/ImageContainer'
import AccordionItem from '@/components/molecules/AccordionItem'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'

const faq = () => {
    return (
        <main className='pb-8'>
            <AnimatedTitle>faq . faq . faq . faq . faq . faq . faq . faq . faq .</AnimatedTitle>
            <Container>
                <Grid>
                    <Col tabletCols={6}>
                        <ImageContainer src='https://source.unsplash.com/random' aspectRatio='2/3' sizes='50vw' quality={100} />
                    </Col>
                    <Col tabletCols={6}>
                        <div className='flex flex-col'>
                            <AccordionItem
                                title='Lorem ipsum dolor sit amet consectetur adipis sicing elit. Voluptatibus labore quia maxime eligendi dicta cum.'
                                content='Lorem ipsum dolor'
                            />
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default faq
