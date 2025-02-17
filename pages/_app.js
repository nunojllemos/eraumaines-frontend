import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import '@/styles/globals.scss'
import Header from '@/organisms/Header'
import Head from 'next/head'
import Footer from '@/molecules/Footer'
import Favicon from '@/molecules/Favicon'
import PageTransition from '@/molecules/PageTransition'

export default function App({ Component, pageProps }) {
    const [colors, setColors] = useState()
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
        const fetchData = async () => {
            const baseApi = String(process.env.NEXT_PUBLIC_API_URL)

            const themeResponse = await fetch(`${baseApi}/theme`)
            const themeData = await themeResponse.json()

            if (themeData?.data?.attributes) {
                const { background_color, text_color, title_color } = themeData?.data?.attributes

                // setColors({ background_color, text_color, title_color })
                document.documentElement.style.setProperty('--background-color', background_color)
                document.documentElement.style.setProperty('--text-color', text_color)
                document.documentElement.style.setProperty('--title-color', title_color)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <Favicon />
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
