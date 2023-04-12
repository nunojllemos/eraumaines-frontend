import { useEffect } from 'react'
import '@/styles/globals.scss'
import Header from '@/organisms/Header'
import Head from 'next/head'
import Footer from '@/molecules/Footer'
import Favicon from '@/molecules/Favicon'
import PageTransition from '@/molecules/PageTransition'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        console.log('Development branch')
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
