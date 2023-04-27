import { useEffect } from 'react'
import Seo from '@/components/atoms/Seo'
import Hero from '@/components/organisms/Hero'
import AboutSection from '@/components/organisms/AboutSection'
import WorkSection from '@/components/organisms/WorkSection'

export default function Home({ data }) {
    const { hero_title, hero_media } = data.attributes
    const { url, provider_metadata } = hero_media?.data?.attributes
    const { resource_type } = provider_metadata

    useEffect(() => {}, [])

    return (
        <>
            <Seo title='Era Uma Inês - Home' />
            <main>
                <Hero title={hero_title} media={url} typeOfMedia={resource_type} />
                <AboutSection />
                <WorkSection />
            </main>
        </>
    )
}

export async function getStaticProps(context) {
    const { locale } = context

    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/home?locale=${strapiLocale}&populate=*`)
    const data = await res.json()

    return {
        props: data,
        revalidate: 10,
    }
}
