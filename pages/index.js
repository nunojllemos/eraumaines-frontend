import { useEffect } from 'react'
import Seo from '@/components/atoms/Seo'
import Hero from '@/components/organisms/Hero'
import AboutSection from '@/components/organisms/AboutSection'
import WorkSection from '@/components/organisms/WorkSection'

export default function Home({ data, persons }) {
    const { hero_title, hero_media, meta_title, meta_description, about_title } = data.data.attributes
    const { url, provider_metadata } = hero_media?.data?.attributes
    const { resource_type } = provider_metadata

    return (
        <>
            <Seo title={meta_title} description={meta_description} />
            <main>
                <Hero title={hero_title} media={url} typeOfMedia={resource_type} />
                <AboutSection title={about_title} persons={persons} />
                <WorkSection />
            </main>
        </>
    )
}

export async function getStaticProps(context) {
    const { locale } = context
    const populateQuery = 'populate=*'
    const populatePersonsQuery = 'populate[persons][populate]=*'

    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home?locale=${strapiLocale}&${populateQuery}`)
    const data = await res.json()

    const resPersons = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home?locale=${strapiLocale}&${populatePersonsQuery}`)
    const persons = await resPersons.json()

    return {
        props: {
            data: data,
            persons: persons?.data?.attributes?.persons,
        },
        revalidate: 10,
    }
}
