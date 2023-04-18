import { useEffect } from 'react'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import ImageContainer from '@/components/atoms/ImageContainer'
import DiaryTitle from '@/components/atoms/DiaryTitle'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import DiaryCard from '@/components/molecules/DiaryCard'
import ReactMarkdown from 'react-markdown'
import useTranslation from '@/hooks/useTranslation'
import remarkGfm from 'remark-gfm'

const SlugDiary = ({ data, relatedPosts }) => {
    const { title, cover, content, publishedAt } = data[0]?.attributes
    const image = cover?.data?.attributes?.url
    const { caption } = cover?.data?.attributes
    const t = useTranslation()
    const publishedDate = new Date(publishedAt)
    const day = publishedDate.getDate()
    const month = publishedDate.getMonth() + 1
    const year = publishedDate.getFullYear()

    useEffect(() => {}, [])

    return (
        <main className='py-16'>
            <div className='pb-16 768:pb-32'>
                <Container>
                    <Grid>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            <div className='text-14 text-black/50 mb-3'>{`${t.diary.single.published} ${day}-${month < 10 ? `0${month}` : month}-${year}`}</div>
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            <figure>
                                <ImageContainer src={image} aspectRatio='16/9' sizes='(min-width: 991px) 70vw, 100vw' />
                                <figcaption className='text-12 mt-2'>{caption}</figcaption>
                            </figure>
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={5} offsetDesktop={2}>
                            <div className='my-12 768:my-16'>
                                <DiaryTitle title={title} />
                            </div>
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            <div className='diary-content'>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                            </div>
                        </Col>
                    </Grid>
                </Container>
            </div>
            {relatedPosts.length > 0 && (
                <>
                    <AnimatedTitle>{`${t.diary.single.related.title} . ${t.diary.single.related.title} . ${t.diary.single.related.title} . ${t.diary.single.related.title} . `}</AnimatedTitle>
                    <Container>
                        <Grid rowGap={3}>
                            {relatedPosts?.map(post => {
                                const { id, attributes } = post.data[0]
                                const { title, description, cover } = attributes
                                const { url } = cover?.data?.attributes

                                return (
                                    <Col key={id} mobileCols={2} tabletCols={4}>
                                        <DiaryCard src={url} aspectRatio='4/3' title={title} description={description} />
                                    </Col>
                                )
                            })}
                        </Grid>
                    </Container>
                </>
            )}
        </main>
    )
}
export default SlugDiary

export async function getStaticPaths(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/posts?populate=*`)
    const data = await res.json()
    const posts = await data.data

    const paths = posts.map(element => ({ params: { slug: element.attributes.slug } }))

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { locale } = context

    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const slug = context.params.slug
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*&locale=${strapiLocale}`
    )
    const data = await res.json()

    const { posts } = data?.data[0].attributes
    const slugs = posts?.data?.map(post => post.attributes.slug)

    const relatedPosts = await Promise.all(
        slugs?.map(async slug => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*&locale=${strapiLocale}`
            )
            const relatedPost = await res.json()

            return relatedPost
        })
    )

    return {
        props: {
            data: data.data,
            relatedPosts,
        },
    }
}
