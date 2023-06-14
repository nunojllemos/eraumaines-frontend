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
import { getImage } from '@/utils/utils'

const SlugDiary = ({ data }) => {
    const {
        publishedAt,
        title,
        cover,
        content,
        posts: { data: relatedPosts },
    } = data.attributes
    const { url, caption } = cover?.data?.attributes || {}
    const publishedDate = new Date(publishedAt)
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
                            {title && publishedAt && (
                                <div className='text-14 text-black/50 mb-3'>{`${t.diary.single.published} ${day && day}-${
                                    month && month < 10 ? `0${month}` : month
                                }-${year && year}`}</div>
                            )}
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            {url && (
                                <figure>
                                    <ImageContainer src={getImage(url)} aspectRatio='16/9' sizes='(min-width: 991px) 70vw, 100vw' />
                                    {caption && <figcaption className='text-12 mt-2'>{caption}</figcaption>}
                                </figure>
                            )}
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={5} offsetDesktop={2}>
                            {title && (
                                <div className='my-12 768:my-16'>
                                    <DiaryTitle title={title} />
                                </div>
                            )}
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            {content && (
                                <div className='diary-content'>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                                </div>
                            )}
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
                                const { id, attributes } = post
                                const { title, description, cover, slug } = attributes
                                const { data: coverSrc } = cover

                                return (
                                    <Col key={id} mobileCols={2} tabletCols={4}>
                                        <DiaryCard
                                            href={`/${slug}`}
                                            src={getImage(coverSrc.attributes.url)}
                                            aspectRatio='4/3'
                                            title={title}
                                            description={description}
                                        />
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

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?populate=*`)
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
    const ptPost = paths[0]?.ptPost

    return {
        paths: enPost ? [ptPost, enPost] : [ptPost],
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    const { locale } = context
    const slug = context.params.slug
    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const queryParams = 'populate=*,cover,posts.cover'
    const baseApi = process.env.NEXT_PUBLIC_API_URL
    const contentType = 'posts'
    const localeQuery = `locale=${strapiLocale}`
    const filtersQuery = `filters[slug][$eq]=${slug}`

    const res = await fetch(`${baseApi}/${contentType}?${filtersQuery}&${queryParams}&${localeQuery}`)
    const data = await res.json()

    return {
        props: {
            data: data.data[0],
        },
        revalidate: 10,
    }
}

export default SlugDiary
