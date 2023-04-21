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
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={3}>
                        <WorkSectionMediaCard src='/images/work-section-card-3.png' aspectRatio='2/3' alt='wedding' />
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={3}>
                        <WorkSectionTestimonialsCard />
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={3}>
                        <WorkSectionInfoCard />
                    </Col>
                </Grid>
            </Container>
        </div>
    )
}
export default WorkSection
