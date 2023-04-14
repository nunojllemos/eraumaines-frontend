import { useEffect } from 'react'
import Seo from '@/components/atoms/Seo'
import Hero from '@/components/organisms/Hero'
import AboutSection from '@/components/organisms/AboutSection'

export default function Home({ data }) {
    const { hero_title } = data.attributes

    useEffect(() => {
        console.log(hero_title)
    }, [])

    return (
        <>
            <Seo title='Era Uma Inês - Home' />
            <main>
                <Hero title={hero_title} />
                <AboutSection />
            </main>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/home`)
    const data = await res.json()

    return {
        props: data,
    }
}
