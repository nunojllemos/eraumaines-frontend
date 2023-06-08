import WorkSectionMediaCard from '@/molecules/WorkSectionMediaCard'
import WorkSectionTestimonialsCard from '@/molecules/WorkSectionTestimonialsCard'
import WorkSectionInfoCard from '@/molecules/WorkSectionInfoCard'
import { getImage } from '@/utils/utils'

const StoriesGridElement = ({ story }) => {
    const { __component } = story

    console.log(story)

    if (__component.includes('reviews')) return <WorkSectionTestimonialsCard invertColors={true} testimonials={story.review} />
    if (__component.includes('media'))
        return (
            <WorkSectionMediaCard src={getImage(story?.media?.data?.attributes?.url)} aspectRatio='2/3' alt={story?.media?.data?.attributes?.alternativeText} />
        )

    if (__component.includes('story'))
        return (
            <WorkSectionInfoCard
                engaged={story?.story?.data?.attributes?.title}
                local='Vila do Conde'
                work={story?.story?.data?.attributes?.title}
                src='/images/work-section-card-1.png'
                aspectRatio='3/4'
                description={story?.story?.data?.attributes?.description}
            />
        )
}
export default StoriesGridElement
