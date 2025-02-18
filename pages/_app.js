import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import '@/styles/globals.scss'
import Header from '@/organisms/Header'
import Head from 'next/head'
import Footer from '@/molecules/Footer'
import Favicon from '@/molecules/Favicon'
import PageTransition from '@/molecules/PageTransition'

export default function App({ Component, pageProps }) {
    const [metaTitle, setMetaTitle] = useState('')
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
            })
        }, 1000)
    }, [router.asPath])

    useEffect(() => {
        const fetchThemeData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/theme?populate=*`)
            const data = await response.json()

            if (data?.data?.attributes) {
                const { backgroundColor, textColor, titleColor, favicon_dark, favicon_light, meta_title } = data.data.attributes

                setMetaTitle(meta_title)

                // CREATE FAVICON
                const lightFaviconLink = document.createElement('link')
                lightFaviconLink.rel = 'icon'
                lightFaviconLink.media = '(prefers-color-scheme: light)'
                document.head.appendChild(lightFaviconLink)
                lightFaviconLink.href = `${process.env.NEXT_PUBLIC_STRAPI_URL}${favicon_light?.data?.attributes?.url}`

                const darkFaviconLink = document.createElement('link')
                darkFaviconLink.rel = 'icon'
                darkFaviconLink.media = '(prefers-color-scheme: dark)'
                document.head.appendChild(darkFaviconLink)
                darkFaviconLink.href = `${process.env.NEXT_PUBLIC_STRAPI_URL}${favicon_dark?.data?.attributes?.url}`

                document.documentElement.style.setProperty('--background-color', backgroundColor)
                document.documentElement.style.setProperty('--text-color', textColor)
                document.documentElement.style.setProperty('--title-color', titleColor)
            }
        }

        fetchThemeData()
    }, [])

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='theme-color' content='#ffffff'></meta>
                <title>{metaTitle || 'Alca'}</title>
            </Head>
            <div className='flex flex-col min-h-screen relative'>
                <Header />
                <PageTransition>
                    <Component {...pageProps} />
                </PageTransition>
                <Footer />
            </div>
        </>
    )
}
