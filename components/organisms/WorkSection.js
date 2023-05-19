import Container from '@/layout/Container'
import Col from '@/layout/Col'
import Grid from '@/layout/Grid'
import AnimatedTitle from '@/molecules/AnimatedTitle'
import WorkSectionCard from '@/molecules/WorkSectionCard'
import StoriesGridElement from './StoriesGridElement'

const WorkSection = ({ stories, title }) => {
    return (
        <div>
            <AnimatedTitle>{`${title} . ${title} . ${title} . ${title} .`}</AnimatedTitle>
            <Container>
                <Grid>
                    <Col mobileCols={2} tabletCols={4} desktopCols={3}>
                        <div className='flex flex-col h-full'>
                            <WorkSectionCard />
                            {stories[0] && <StoriesGridElement story={stories[0]} />}
                            {stories[1] && <StoriesGridElement story={stories[1]} />}
                        </div>
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={4}>
                        <div className='flex flex-col h-full'>
                            {stories[2] && <StoriesGridElement story={stories[2]} />}
                            {stories[3] && <StoriesGridElement story={stories[3]} />}
                            {stories[4] && <StoriesGridElement story={stories[4]} />}
                        </div>
                    </Col>
                    <Col mobileCols={2} tabletCols={4} desktopCols={5}>
                        <div className='flex flex-col h-full'>
                            {stories[5] && <StoriesGridElement story={stories[5]} />}
                            {stories[6] && <StoriesGridElement story={stories[6]} />}
                            {stories[7] && <StoriesGridElement story={stories[7]} />}
                            {stories[8] && <StoriesGridElement story={stories[8]} />}
                        </div>
                    </Col>
                </Grid>
            </Container>
        </div>
    )
}
export default WorkSection
