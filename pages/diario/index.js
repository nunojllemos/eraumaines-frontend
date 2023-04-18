import { useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import DiaryCard from '@/components/molecules/DiaryCard'
import useTranslation from '@/hooks/useTranslation'

const Diario = ({ data }) => {
    const t = useTranslation()

    return (
        <main className='pb-16'>
            <AnimatedTitle>{`${t.diary.title} . ${t.diary.title} . ${t.diary.title} . ${t.diary.title} . ${t.diary.title} . `}</AnimatedTitle>
            <Container>
                <Grid rowGap={2}>
                    <Col mobileCols={2} tabletCols={8}>
                        <div className='flex flex-col gap-8'>
                            {data[0] && (
                                <DiaryCard
                                    src={data[0].attributes?.cover?.data?.attributes?.url}
                                    aspectRatio='16/9'
                                    title={data[0].attributes?.title}
                                    description={data[0].attributes?.description}
                                    href={data[0].attributes?.slug}
                                />
                            )}
                            {data[1] && (
                                <DiaryCard
                                    src={data[1].attributes?.cover?.data?.attributes?.url}
                                    aspectRatio='16/9'
                                    title={data[1].attributes?.title}
                                    description={data[1].attributes?.description}
                                    href={data[1].attributes?.slug}
                                />
                            )}
                        </div>
                    </Col>

                    <Col mobileCols={2} tabletCols={4}>
                        <div className='flex flex-col gap-8 h-full'>
                            {data[2] && (
                                <DiaryCard
                                    src={data[2].attributes?.cover?.data?.attributes?.url}
                                    aspectRatio='4/3'
                                    title={data[2].attributes?.title}
                                    description={data[2].attributes?.description}
                                    href={data[2].attributes?.slug}
                                />
                            )}
                            <div className='aspect-square 768:flex-1 relative'>
                                <Image className='object-contain' src='/images/octopus.gif' alt='' fill={true} />
                            </div>
                        </div>
                    </Col>

                    <Col mobileCols={2} tabletCols={6}>
                        <div className='flex flex-col gap-8'>
                            {data[3] && (
                                <DiaryCard
                                    src={data[3].attributes?.cover?.data?.attributes?.url}
                                    aspectRatio='16/9'
                                    title={data[3].attributes?.title}
                                    description={data[3].attributes?.description}
                                    href={data[3].attributes?.slug}
                                />
                            )}
                            {data[4] && (
                                <DiaryCard
                                    src={data[4].attributes?.cover?.data?.attributes?.url}
                                    aspectRatio='4/3'
                                    title={data[4].attributes?.title}
                                    description={data[4].attributes?.description}
                                    href={data[4].attributes?.slug}
                                />
                            )}
                        </div>
                    </Col>

                    <Col mobileCols={2} tabletCols={6}>
                        <div className='flex flex-col gap-8 h-full'>
                            {data[5] && (
                                <DiaryCard
                                    src={data[5].attributes?.cover?.data?.attributes?.url}
                                    aspectRatio='4/3'
                                    title={data[5].attributes?.title}
                                    description={data[5].attributes?.description}
                                    href={data[5].attributes?.slug}
                                />
                            )}
                            {data[6] && (
                                <DiaryCard
                                    src={data[6].attributes?.cover?.data?.attributes?.url}
                                    aspectRatio='1/1'
                                    title={data[6].attributes?.title}
                                    description={data[6].attributes?.description}
                                    href={data[6].attributes?.slug}
                                />
                            )}
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default Diario

export async function getStaticProps(context) {
    const { locale } = context

    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/posts?locale=${strapiLocale}&populate=*`)
    const data = await res.json()

    console.log(data)

    return {
        props: data,
    }
}
