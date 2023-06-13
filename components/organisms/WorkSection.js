import Container from '@/layout/Container'
import Col from '@/layout/Col'
import Grid from '@/layout/Grid'
import AnimatedTitle from '@/molecules/AnimatedTitle'
import WorkSectionCard from '@/molecules/WorkSectionCard'
import StoriesGridElement from './StoriesGridElement'

const WorkSection = ({ stories, title }) => {
    console.log(stories)

    return (
        <div className='mb-8'>
            {title && <AnimatedTitle>{`${title} . ${title} . ${title} . ${title} .`}</AnimatedTitle>}
            {stories.length > 0 && (
                <Container>
                    <Grid>
                        <Col mobileCols={2} tabletCols={4} desktopCols={3}>
                            <div className='flex flex-col h-full gap-6 768:gap-8'>
                                <WorkSectionCard />
                                {stories[2] && <StoriesGridElement story={stories[2]} />}
                                {stories[5] && <StoriesGridElement story={stories[5]} />}
                            </div>
                        </Col>
                        <Col mobileCols={2} tabletCols={4} className='mt-6 768:mt-0'>
                            <div className='flex flex-col h-full gap-6 768:gap-8'>
                                {stories[0] && <StoriesGridElement story={stories[0]} />}
                                {stories[3] && <StoriesGridElement story={stories[3]} />}
                                {stories[6] && <StoriesGridElement story={stories[6]} />}
                            </div>
                        </Col>
                        <Col mobileCols={2} tabletCols={4} desktopCols={5} className='mt-6 768:mt-0'>
                            <div className='flex flex-col h-full gap-6 768:gap-8'>
                                {stories[1] && <StoriesGridElement story={stories[1]} />}
                                {stories[4] && <StoriesGridElement story={stories[4]} />}
                                {stories[7] && <StoriesGridElement story={stories[7]} />}
                                {stories[8] && <StoriesGridElement story={stories[8]} />}
                            </div>
                        </Col>
                    </Grid>
                </Container>
            )}
        </div>
    )
}
export default WorkSection
