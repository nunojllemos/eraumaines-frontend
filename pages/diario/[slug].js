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
    // const { title, cover, content, publishedAt } = data && data?.attributes
    // const image = data?.attributes?.cover?.data?.attributes?.url
    // const { caption } = data?.attributes?.cover?.data?.attributes?.caption
    const publishedDate = new Date(data?.attributes?.publishedAt)
    const day = publishedDate?.getDate()
    const month = publishedDate?.getMonth() + 1
    const year = publishedDate?.getFullYear()

    const t = useTranslation()

    return (
        <main className='py-16'>
            <div className='pb-16 768:pb-32'>
                <Container>
                    <Grid>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            {data && (
                                <div className='text-14 text-black/50 mb-3'>{`${t.diary.single.published} ${day && day}-${
                                    month && month < 10 ? `0${month}` : month
                                }-${year && year}`}</div>
                            )}
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            <figure>
                                {data && (
                                    <ImageContainer
                                        src={data?.attributes?.cover?.data?.attributes?.url}
                                        aspectRatio='16/9'
                                        sizes='(min-width: 991px) 70vw, 100vw'
                                    />
                                )}
                                {data && <figcaption className='text-12 mt-2'>{data?.attributes?.cover?.data?.attributes?.caption}</figcaption>}
                            </figure>
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={5} offsetDesktop={2}>
                            <div className='my-12 768:my-16'>{data && <DiaryTitle title={data?.attributes?.title} />}</div>
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            <div className='diary-content'>
                                {data && <ReactMarkdown remarkPlugins={[remarkGfm]}>{data?.attributes?.content}</ReactMarkdown>}
                            </div>
                        </Col>
                    </Grid>
                </Container>
            </div>
            {relatedPosts?.length > 0 && (
                <>
                    <AnimatedTitle>{`${t.diary.single.related.title} . ${t.diary.single.related.title} . ${t.diary.single.related.title} . ${t.diary.single.related.title} . `}</AnimatedTitle>
                    <Container>
                        <Grid rowGap={3}>
                            {relatedPosts?.map(post => {
                                const { id, attributes } = post?.data[0]
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

export async function getStaticPaths(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/posts?populate=*`)
    const data = await res.json()
    const posts = await data.data

    const paths = posts.map(element => {
        if (element?.attributes?.localizations?.data[0]?.attributes?.slug) {
            return {
                ptPost: { params: { slug: element?.attributes?.slug }, locale: 'pt' },
                enPost: { params: { slug: element?.attributes?.localizations?.data[0]?.attributes?.slug }, locale: 'en' },
            }
        } else {
            return {
                ptPost: { params: { slug: element?.attributes?.slug }, locale: 'pt' },
            }
        }
    })

    const enPost = paths[0]?.enPost
    const ptPost = paths[0].ptPost

    return {
        paths: enPost ? [ptPost, enPost] : [ptPost],
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

    const slugs = data?.data[0]?.attributes?.posts?.data?.map(post => post?.attributes?.slug)

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
            data: data.data[0],
            relatedPosts,
        },
    }
}

export default SlugDiary
