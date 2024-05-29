import Container from '@/layout/Container'
import Col from '@/layout/Col'
import Grid from '@/layout/Grid'
import AnimatedTitle from '@/molecules/AnimatedTitle'
import WorkSectionCard from '@/molecules/WorkSectionCard'
import StoriesGridElement from './StoriesGridElement'

const WorkSection = ({ stories, title, backgroundColor }) => {
    if (!stories || stories.length === 0) return

    return (
        <div className='mb-8'>
            {title && <AnimatedTitle>{`${title} . ${title} . ${title} . ${title} .`}</AnimatedTitle>}
            {stories.length > 0 && (
                <Container>
                    <Grid>
                        <Col mobileCols={2} tabletCols={4} desktopCols={3}>
                            <div className='flex flex-col h-full gap-4 768:gap-8'>
                                <WorkSectionCard backgroundColor={backgroundColor} />
                                {stories[1] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[1]} />}
                                {stories[2] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[2]} />}
                                {stories[5] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[5]} />}
                            </div>
                        </Col>
                        <Col mobileCols={2} tabletCols={4} className='mt-4 768:mt-0'>
                            <div className='flex flex-col h-full gap-4 768:gap-8'>
                                {stories[0] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[0]} />}
                                {stories[3] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[3]} />}
                                {stories[6] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[6]} />}
                            </div>
                        </Col>
                        <Col mobileCols={2} tabletCols={4} desktopCols={5} className='mt-4 768:mt-0'>
                            <div className='flex flex-col h-full gap-4 768:gap-8'>
                                {stories[4] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[4]} />}
                                {stories[7] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[7]} />}
                                {stories[8] && <StoriesGridElement backgroundColor={backgroundColor} story={stories[8]} />}
                            </div>
                        </Col>
                    </Grid>
                </Container>
            )}
        </div>
    )
}
export default WorkSection
