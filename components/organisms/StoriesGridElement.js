import WorkSectionMediaCard from '@/molecules/WorkSectionMediaCard'
import WorkSectionTestimonialsCard from '@/molecules/WorkSectionTestimonialsCard'
import WorkSectionInfoCard from '@/molecules/WorkSectionInfoCard'
import { getImage } from '@/utils/utils'

const StoriesGridElement = ({ story, backgroundColor }) => {
    const { __component } = story

    if (__component.includes('reviews')) {
        return <WorkSectionTestimonialsCard backgroundColor={backgroundColor} reviews={story.reviews} />
    }

    if (__component.includes('media')) {
        return (
            <WorkSectionMediaCard
                typeOfMedia={story?.media?.data?.attributes?.mime}
                src={getImage(story?.media?.data?.attributes?.url)}
                aspectRatio='16/9'
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
                aspectRatio='3/2'
                description={story?.story?.data?.attributes?.description}
            />
        )
    }
}
export default StoriesGridElement
