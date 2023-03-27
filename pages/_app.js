import { useEffect } from 'react'
import '@/styles/globals.scss'
import Header from '@/organisms/Header'
import Head from 'next/head'
import Footer from '@/components/molecules/Footer'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        console.log('Development branch')
    }, [])

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                {/* LIGHT THEME FAVICON */}
                <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='180x180' href='/favicon/light/apple-touch-icon.png' />
                <link media='(prefers-color-scheme: light)' rel='icon' type='image/png' sizes='32x32' href='/favicon/light/favicon-32x32.png' />
                <link media='(prefers-color-scheme: light)' rel='icon' type='image/png' sizes='16x16' href='/favicon/light/favicon-16x16.png' />
                <link media='(prefers-color-scheme: light)' rel='manifest' href='/favicon/light/site.webmanifest' />
                <link media='(prefers-color-scheme: light)' rel='mask-icon' href='/favicon/light/safari-pinned-tab.svg' color='#5bbad5' />
                <link media='(prefers-color-scheme: light)' rel='shortcut icon' href='/favicon/light/favicon.ico' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='msapplication-config' content='/favicon/light/browserconfig.xml' />
                {/* DARK THEME FAVICON */}
                <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='180x180' href='/favicon/dark/apple-touch-icon.png' />
                <link media='(prefers-color-scheme: dark)' rel='icon' type='image/png' sizes='32x32' href='/favicon/dark/favicon-32x32.png' />
                <link media='(prefers-color-scheme: dark)' rel='icon' type='image/png' sizes='16x16' href='/favicon/dark/favicon-16x16.png' />
                <link media='(prefers-color-scheme: dark)' rel='manifest' href='/favicon/dark/site.webmanifest' />
                <link media='(prefers-color-scheme: dark)' rel='shortcut icon' href='/favicon/dark/favicon.ico' />
                <meta name='msapplication-config' content='/favicon/dark/browserconfig.xml' />
                <meta name='theme-color' content='#ffffff'></meta>
            </Head>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    )
}
