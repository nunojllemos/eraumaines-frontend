import { useEffect } from 'react'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import ImageContainer from '@/components/atoms/ImageContainer'
import DiaryTitle from '@/components/atoms/DiaryTitle'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import DiaryCard from '@/components/molecules/DiaryCard'
import ReactMarkdown from 'react-markdown'

const SlugDiary = ({ data }) => {
    const { title, cover, content } = data[0]?.attributes
    const image = cover?.data?.attributes?.url
    const caption = cover?.data?.attributes?.caption

    useEffect(() => {}, [])

    return (
        <main className='py-16'>
            <div className='pb-16 768:pb-32'>
                <Container>
                    <Grid>
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
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        </Col>
                    </Grid>
                </Container>
            </div>
            <AnimatedTitle>outros artigos . outros artigos . outros artigos . outros artigos . </AnimatedTitle>
            <Container>
                <Grid>
                    <Col mobileCols={2} tabletCols={4}>
                        <DiaryCard
                            src='/images/diary-card-4.png'
                            aspectRatio='4/3'
                            title='Um dia na minha vida'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus repellendus architecto. Quidem, distinctio temps? Iusto nisi. Esse rem doloribus eum laborum quia, perferendis earum ea praesentium saepe. Vero, unde?'
                        />
                    </Col>
                    <Col mobileCols={2} tabletCols={4}>
                        <DiaryCard
                            src='/images/diary-card-2.png'
                            aspectRatio='4/3'
                            title='Um título qualquer com duas linhas.'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus repellendus architecto. Quidem, distinctio temps? Iusto nisi. Esse rem doloribus eum laborum quia, perferendis earum ea praesentium saepe. Vero, unde?'
                        />
                    </Col>
                    <Col mobileCols={2} tabletCols={4}>
                        <DiaryCard
                            src='/images/diary-card-3.png'
                            aspectRatio='4/3'
                            title='Um dia na minha vida'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus repellendus architecto. Quidem, distinctio temps? Iusto nisi. Esse rem doloribus eum laborum quia, perferendis earum ea praesentium saepe. Vero, unde?'
                        />
                    </Col>
                </Grid>
            </Container>
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
    const slug = context.params.slug
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`)
    const data = await res.json()

    return {
        props: data,
    }
}
