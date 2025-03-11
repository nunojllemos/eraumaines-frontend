import ImageContainer from '@/components/atoms/ImageContainer'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import { getImage } from '@/utils/utils'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const termos = ({ data }) => {
    const title = data?.title
    const content = data?.content
    const url = data?.media.data.attributes?.url

    return (
        <main className='pb-16'>
            {title && <AnimatedTitle>{`${title} . ${title} . ${title} . ${title} .`}</AnimatedTitle>}
            <Container>
                <Grid tablet={800}>
                    {url && (
                        <Col tablet={800} mobileCols={2} tabletCols={6}>
                            <div className='sticky top-8'>
                                <ImageContainer src={getImage(url)} aspectRatio='1/1' sizes='(min-width: 800px) 50vw, 100vw' />
                            </div>
                        </Col>
                    )}
                    {content && (
                        <Col tablet={800} mobileCols={2} tabletCols={6}>
                            <div className='terms-content text-16 768:text-18'>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                            </div>
                        </Col>
                    )}
                </Grid>
            </Container>
        </main>
    )
}
export default termos

export async function getStaticProps(context) {
    const { locale } = context

    const populateQuery = 'populate=*'
    const baseApi = process.env.NEXT_PUBLIC_API_URL
    const contentType = 'term'
    const localeQuery = `locale=${locale}`

    const res = await fetch(`${baseApi}/${contentType}?${localeQuery}&${populateQuery}`)
    const data = await res.json()

    return {
        props: {
            data: data?.data?.attributes || null,
        },
        revalidate: 10,
    }
}
