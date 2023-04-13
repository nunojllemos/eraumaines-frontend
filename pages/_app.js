import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '@/styles/globals.scss'
import Header from '@/organisms/Header'
import Head from 'next/head'
import Footer from '@/molecules/Footer'
import Favicon from '@/molecules/Favicon'
import PageTransition from '@/molecules/PageTransition'

export default function App({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        console.log('Development branch')
    }, [])

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
            })
        }, 1000)
    }, [router.asPath])

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
