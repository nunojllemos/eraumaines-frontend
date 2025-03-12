import Hero from '@/components/organisms/Hero'
import AboutSection from '@/components/organisms/AboutSection'
import WorkSection from '@/components/organisms/WorkSection'

export default function Home({ data, theme, contactsData }) {
    const hero_title = data?.hero_title
    const about_title = data?.about_title
    const stories_title = data?.stories_title
    const persons = data?.persons
    const stories = data?.stories
    const background_color = data?.background_color
    const url = data?.hero_media?.data?.attributes?.url
    const mime = data?.hero_media?.data?.attributes?.mime
    const storiesTitle = data?.grid_cta

    return (
        <>
            <main>
                <Hero title={hero_title} media={url} typeOfMedia={mime} />
                <AboutSection title={about_title} persons={persons} />
                <WorkSection storiesTitle={storiesTitle} title={stories_title} stories={stories} backgroundColor={background_color} />
            </main>
        </>
    )
}

export async function getStaticProps(context) {
    const { locale } = context

    const contactsPopulateQuery = 'fields[0]=socials&populate=socials.url,socials.icon'
    const contactContentType = 'contact'

    const populateQuery =
        'populate=*,hero_media,persons,persons.person_photo,stories,stories.media,stories.review,stories.story,stories.story.cover,stories.story.category,stories.reviews,background_color'
    const baseApi = String(process.env.NEXT_PUBLIC_API_URL)
    const contentType = 'homepage'
    const localeQuery = `locale=${locale}`

    const contactsResponse = await fetch(`${baseApi}/${contactContentType}?${localeQuery}&${contactsPopulateQuery}`)
    const contactsData = await contactsResponse.json()

    console.log(contactsData)

    const res = await fetch(`${baseApi}/${contentType}?${localeQuery}&${populateQuery}`)
    const data = await res.json()

    const themeResponse = await fetch(`${baseApi}/theme`)
    const themeData = await themeResponse.json()

    return {
        props: {
            data: data?.data?.attributes || null,
            contactsData: contactsData?.data?.attributes || null,
            theme: themeData?.data?.attributes || null,
        },
        revalidate: 10,
    }
}
