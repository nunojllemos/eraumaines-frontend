import Head from 'next/head'

const Seo = ({ title = 'Era Uma Inês', description = 'Website de fotografia e vídeo expecializado em eventos de casamento.' }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>
    )
}
export default Seo
