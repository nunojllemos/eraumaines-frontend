import WorkSectionMediaCard from '@/molecules/WorkSectionMediaCard'
import WorkSectionTestimonialsCard from '@/molecules/WorkSectionTestimonialsCard'
import WorkSectionInfoCard from '@/molecules/WorkSectionInfoCard'
import { getImage } from '@/utils/utils'

const StoriesGridElement = ({ story }) => {
    const { __component } = story
    console.log(__component)

    if (__component.includes('reviews')) {
        return <WorkSectionTestimonialsCard testimonials={story.review} />
    }

    if (__component.includes('media')) {
        return (
            <WorkSectionMediaCard
                typeOfMedia={story?.media?.data?.attributes?.mime}
                src={getImage(story?.media?.data?.attributes?.url)}
                aspectRatio='2/3'
                alt={story?.media?.data?.attributes?.alternativeText || ''}
            />
        )
    }

    if (__component.includes('story')) {
        return (
            <WorkSectionInfoCard
                typeOfMedia={story?.story?.data?.attributes?.cover?.data?.attributes?.mime}
                slug={story?.story?.data?.attributes?.slug}
                title={story?.story?.data?.attributes?.title}
                location={story?.story?.data?.attributes?.location}
                category={story?.story?.data?.attributes?.category?.data?.attributes?.name}
                src={getImage(story?.story?.data?.attributes?.cover?.data?.attributes?.url)}
                aspectRatio='3/4'
                description={story?.story?.data?.attributes?.description}
            />
        )
    }
}
export default StoriesGridElement
