import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import ImageContainer from '@/components/atoms/ImageContainer'
import DiaryTitle from '@/components/atoms/DiaryTitle'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import WorkSectionInfoCard from '@/components/molecules/WorkSectionInfoCard'
import useTranslation from '@/hooks/useTranslation'
import { getImage } from '@/utils/utils'

const SlugHistorias = ({ data }) => {
    const content = data?.attributes?.content
    const title = data?.attributes?.title
    const location = data?.attributes?.location
    const publishedAt = data?.attributes?.publishedAt
    const related = data?.attributes?.related
    const url = data?.attributes?.cover?.data?.attributes?.url
    const mime = data?.attributes?.cover?.data?.attributes?.mime
    const categoryName = data?.attributes?.category?.data?.attributes?.name
    const t = useTranslation()

    const publishedDate = new Date(publishedAt)
    const day = publishedDate?.getDate()
    const month = publishedDate?.getMonth() + 1
    const year = publishedDate?.getFullYear()

    console.log(mime)
    console.log(location)
    console.log(categoryName)

    return (
        <main className='py-16'>
            <div className='pb-16 768:pb-32'>
                <Container>
                    <Grid>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            {title && publishedAt && (
                                <div className='text-14 text-black/50 mb-3'>{`${t.diary.single.published} ${day}-${
                                    month < 10 ? `0${month}` : month
                                }-${year}`}</div>
                            )}
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            {mime?.includes('video') && url ? (
                                <video muted autoPlay playsInline loop src={getImage(url)}></video>
                            ) : (
                                <figure>
                                    <ImageContainer src={getImage(url)} aspectRatio='16/9' sizes='(min-width: 991px) 70vw, 100vw' />
                                </figure>
                            )}
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={5} offsetDesktop={2}>
                            <div className='my-12 768:my-16'>
                                <DiaryTitle title={title} />
                                <div className='text-18 font-light font-subjectivity'>
                                    <p>
                                        {location}, {categoryName}
                                    </p>
                                </div>
                            </div>
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

            {related?.data?.length > 0 && (
                <>
                    <AnimatedTitle>mais histórias . mais histórias . mais histórias . </AnimatedTitle>
                    <Container>
                        <Grid rowGap={3}>
                            {related?.data?.map(relatedStory => {
                                const id = relatedStory
                                const slug = relatedStory?.attributes
                                const title = relatedStory?.attributes
                                const description = relatedStory?.attributes
                                const location = relatedStory?.attributes
                                const relateCategoryName = relatedStory?.attributes?.category?.data?.attributes?.name || ''
                                const url = relatedStory?.attributes?.data?.attributes
                                const mime = relatedStory?.attributes?.data?.attributes

                                return (
                                    <Col key={`related-story-${id}`} mobileCols={2} tabletCols={4}>
                                        <WorkSectionInfoCard
                                            typeOfMedia={mime}
                                            category={relateCategoryName}
                                            src={getImage(url)}
                                            aspectRatio='16/9'
                                            location={location}
                                            title={title}
                                            description={description}
                                            slug={slug}
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stories`)
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

    const queryParams = 'populate=*,related,related.cover,related.category,category,cover'
    const baseApi = process.env.NEXT_PUBLIC_API_URL
    const contentType = 'stories'
    const localeQuery = `locale=${locale}`
    const filtersQuery = `filters[slug][$eq]=${slug}`

    const res = await fetch(`${baseApi}/${contentType}?${filtersQuery}&${queryParams}&${localeQuery}`)
    const data = await res.json()

    return {
        props: {
            data: data?.data[0] || null,
        },
        revalidate: 10,
    }
}

export default SlugHistorias
