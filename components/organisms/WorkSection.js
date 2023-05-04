import Container from '../styled-components/layout/Container'
import AnimatedTitle from '../molecules/AnimatedTitle'
import WorkSectionCard from '../molecules/WorkSectionCard'
import Col from '../styled-components/layout/Col'
import Grid from '../styled-components/layout/Grid'
import WorkSectionMediaCard from '../molecules/WorkSectionMediaCard'
import WorkSectionTestimonialsCard from '../molecules/WorkSectionTestimonialsCard'
import WorkSectionInfoCard from '../molecules/WorkSectionInfoCard'

const WorkSection = testemonials => {
    console.log('teste workSection', testemonials)

    return (
        <div>
            <AnimatedTitle>memory seekers . memory seekers . memory seekers</AnimatedTitle>
            <Container>
                <Grid>
                    <Col mobileCols={2} tabletCols={4} desktopCols={3}>
                        <div className='flex flex-col  h-full'>
                            <WorkSectionCard />
                            <WorkSectionMediaCard src='/images/work-section-card-4.png' aspectRatio='2/3' alt='wedding' />
                            <WorkSectionTestimonialsCard invertColors={true} testemonials={testemonials} />
                        </div>
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={4}>
                        <div className='flex flex-col h-full'>
                            <WorkSectionMediaCard src='/images/work-section-card-3.png' aspectRatio='2/3' alt='wedding' />
                            <WorkSectionInfoCard
                                engaged='Ana e Nuno'
                                local='Vila do Conde'
                                work='Casamento'
                                src='/images/work-section-card-1.png'
                                aspectRatio='3/4'
                            />
                            <WorkSectionMediaCard src='/images/work-section-card-6.png' aspectRatio='16/9' alt='wedding' />
                        </div>
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={5}>
                        <div className='flex flex-col h-full'>
                            <WorkSectionMediaCard src='/images/work-section-card-4.png' aspectRatio='16/9' alt='wedding' />
                            <WorkSectionMediaCard src='/images/work-section-card-3.png' aspectRatio='4/3' alt='wedding' />
                            <WorkSectionTestimonialsCard invertColors={true} testemonials={testemonials} />
                            <WorkSectionMediaCard src='/images/work-section-card-2.png' aspectRatio='4/3' alt='wedding' />
                        </div>
                    </Col>
                </Grid>
            </Container>
        </div>
    )
}
export default WorkSection
