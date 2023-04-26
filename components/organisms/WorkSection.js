import Container from '../styled-components/layout/Container'
import AnimatedTitle from '../molecules/AnimatedTitle'
import WorkSectionCard from '../molecules/WorkSectionCard'
import Col from '../styled-components/layout/Col'
import Grid from '../styled-components/layout/Grid'
import WorkSectionMediaCard from '../molecules/WorkSectionMediaCard'
import WorkSectionTestimonialsCard from '../molecules/WorkSectionTestimonialsCard'
import WorkSectionInfoCard from '../molecules/WorkSectionInfoCard'

const WorkSection = () => {
    return (
        <div>
            <AnimatedTitle>memory seekers . memory seekers . memory seekers</AnimatedTitle>
            <Container>
                <Grid rowGap={2}>
                    <Col mobileCols={2} tabletCols={4} desktopCols={3}>
                        <WorkSectionCard />
                        <WorkSectionMediaCard src='/images/work-section-card-4.png' aspectRatio='2/3' alt='wedding' />
                        <WorkSectionTestimonialsCard />
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={4}>
                        <WorkSectionMediaCard src='/images/work-section-card-3.png' aspectRatio='2/3' alt='wedding' />
                        <WorkSectionInfoCard engaged='Ana e Nuno' local='Vila do Conde' work='Casamento' />
                        <WorkSectionMediaCard src='/images/work-section-card-6.png' aspectRatio='2/3' alt='wedding' />
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={5}>
                        <WorkSectionMediaCard src='/images/work-section-card-4.png' aspectRatio='2/3' alt='wedding' />
                        <WorkSectionMediaCard src='/images/work-section-card-3.png' aspectRatio='2/3' alt='wedding' />
                        <WorkSectionTestimonialsCard invertColors={true} />
                        <WorkSectionMediaCard src='/images/work-section-card-2.png' aspectRatio='2/3' alt='wedding' />
                    </Col>
                </Grid>
            </Container>
        </div>
    )
}
export default WorkSection
