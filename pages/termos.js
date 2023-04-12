import ImageContainer from '@/components/atoms/ImageContainer'
import AccordionItem from '@/components/molecules/AccordionItem'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'

const termos = () => {
    return (
        <main className='pb-16'>
            <AnimatedTitle>termos contratuais . termos contratuais . termos contratuais . termos contratuais . </AnimatedTitle>
            <Container>
                <Grid tablet={800}>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='sticky top-8'>
                            <ImageContainer src='https://source.unsplash.com/random?document' aspectRatio='2/2' sizes='50vw' quality={100} />
                        </div>
                    </Col>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='terms-content text-16 768:text-18'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, architecto? Modi soluta id nisi quod dicta laboriosam error
                            repellendus, iure veniam vitae nobis magni deserunt consequuntur assumenda numquam tenetur itaque?
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default termos
