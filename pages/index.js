import Seo from '@/components/atoms/Seo'
import Hero from '@/components/organisms/Hero'
import AboutSection from '@/components/organisms/AboutSection'
import WorkSection from '@/components/organisms/WorkSection'

export default function Home({ data }) {
    const { hero_title, hero_media, meta_title, meta_description, about_title, stories_title, persons, stories } = data
    const { url, mime } = hero_media?.data?.attributes
    const { resource_type } = mime

    console.log(stories)

    return (
        <>
            <Seo title={meta_title} description={meta_description} />
            <main>
                <Hero title={hero_title} media={url} typeOfMedia={resource_type} />
                <AboutSection title={about_title} persons={persons} />
                <WorkSection title={stories_title} stories={stories} />
            </main>
        </>
    )
}

export async function getStaticProps(context) {
    const { locale } = context
    const populateQuery = 'populate=*,hero_media,persons,persons.person_photo,stories,stories.media,stories.review,stories.story,stories.story.cover'

    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home?locale=${strapiLocale}&${populateQuery}`)
    const data = await res.json()

    return {
        props: {
            data: data?.data?.attributes,
        },
        revalidate: 10,
    }
}
