import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import DiaryCard from '@/components/molecules/DiaryCard'
import useTranslation from '@/hooks/useTranslation'
import PageLink from '@/components/molecules/PageLink'

const Diario = ({ data, currentPage }) => {
    const t = useTranslation()
    const TOTAL_PAGES = data.meta.pagination.pageCount
    let pages = []

    const populatePagesArray = () => {
        for (let index = 1; index <= TOTAL_PAGES; index++) {
            pages.push(index)
        }
    }
    populatePagesArray()

    useEffect(() => {
        // console.log(currentPage)
    }, [])

    return (
        <main className='pb-16'>
            <AnimatedTitle>{`${t.diary.title} . ${t.diary.title} . ${t.diary.title} . ${t.diary.title} . ${t.diary.title} . ${t.diary.title} .`}</AnimatedTitle>
            <Container>
                {data && (
                    <Grid rowGap={2}>
                        <Col mobileCols={2} tabletCols={8}>
                            <div className='flex flex-col gap-8'>
                                {data.data[0] && (
                                    <DiaryCard
                                        src={data.data[0].attributes?.cover?.data?.attributes?.url}
                                        aspectRatio='16/9'
                                        title={data.data[0].attributes?.title}
                                        description={data.data[0].attributes?.description}
                                        href={data.data[0].attributes?.slug}
                                    />
                                )}
                                {data.data[1] && (
                                    <DiaryCard
                                        src={data.data[1].attributes?.cover?.data?.attributes?.url}
                                        aspectRatio='16/9'
                                        title={data.data[1].attributes?.title}
                                        description={data.data[1].attributes?.description}
                                        href={data.data[1].attributes?.slug}
                                    />
                                )}
                            </div>
                        </Col>

                        <Col mobileCols={2} tabletCols={4}>
                            <div className='flex flex-col gap-8 h-full'>
                                {data.data[2] && (
                                    <DiaryCard
                                        src={data.data[2].attributes?.cover?.data?.attributes?.url}
                                        aspectRatio='4/3'
                                        title={data.data[2].attributes?.title}
                                        description={data.data[2].attributes?.description}
                                        href={data.data[2].attributes?.slug}
                                    />
                                )}
                                <div className='aspect-square 768:flex-1 relative bg-black/80'>
                                    {/* <Image className='object-contain' src='/images/octopus.gif' alt='' fill={true} /> */}
                                </div>
                            </div>
                        </Col>

                        <Col mobileCols={2} tabletCols={6}>
                            <div className='flex flex-col gap-8'>
                                {/* {data.data[3] && (
                                    <DiaryCard
                                        src={data.data[3].attributes?.cover?.data?.attributes?.url}
                                        aspectRatio='16/9'
                                        title={data.data[3].attributes?.title}
                                        description={data.data[3].attributes?.description}
                                        href={data.data[3].attributes?.slug}
                                    />
                                )} */}
                                <div className='aspect-[3/2] 768:flex-1 relative bg-black/30'>
                                    {/* <Image className='object-contain' src='/images/octopus.gif' alt='' fill={true} /> */}
                                </div>
                                {data.data[3] && (
                                    <DiaryCard
                                        src={data.data[3].attributes?.cover?.data?.attributes?.url}
                                        aspectRatio='4/3'
                                        title={data.data[3].attributes?.title}
                                        description={data.data[3].attributes?.description}
                                        href={data.data[3].attributes?.slug}
                                    />
                                )}
                            </div>
                        </Col>

                        <Col mobileCols={2} tabletCols={6}>
                            <div className='flex flex-col gap-8 h-full'>
                                {data.data[4] && (
                                    <DiaryCard
                                        src={data.data[4].attributes?.cover?.data?.attributes?.url}
                                        aspectRatio='4/3'
                                        title={data.data[4].attributes?.title}
                                        description={data.data[4].attributes?.description}
                                        href={data.data[4].attributes?.slug}
                                    />
                                )}
                                {/* {data.data[6] && (
                                    <DiaryCard
                                        src={data.data[6].attributes?.cover?.data?.attributes?.url}
                                        aspectRatio='1/1'
                                        title={data.data[6].attributes?.title}
                                        description={data.data[6].attributes?.description}
                                        href={data.data[6].attributes?.slug}
                                    />
                                )} */}
                                <div className='768:flex-1 relative bg-black/50'>
                                    {/* <Image className='object-contain' src='/images/octopus.gif' alt='' fill={true} /> */}
                                </div>
                            </div>
                        </Col>
                    </Grid>
                )}
                <div className='text-18 mt-24'>
                    <div className='flex justify-end'>
                        <ul className='flex gap-4'>
                            {currentPage > 1 && (
                                <PageLink currentPage={currentPage} page={0} toPage={Number(currentPage) - 1}>
                                    &lt;
                                </PageLink>
                            )}
                            {pages.map(page => (
                                <PageLink key={page} currentPage={currentPage} page={page} toPage={page}>
                                    {page}
                                </PageLink>
                            ))}
                            {currentPage < TOTAL_PAGES && (
                                <PageLink currentPage={currentPage} page={0} toPage={Number(currentPage) + 1}>
                                    &gt;
                                </PageLink>
                            )}
                        </ul>
                    </div>
                </div>
            </Container>
        </main>
    )
}
export default Diario

export async function getServerSideProps(context) {
    const { locale, query } = context
    const NUMBER_OF_POSTS_PER_PAGE = 5
    const CURRENT_PAGE = query.page || 1

    const paginationQuery = `pagination[pageSize]=${NUMBER_OF_POSTS_PER_PAGE}`
    const pageQuery = `pagination[page]=${CURRENT_PAGE}`
    const populateQuery = 'populate=*'

    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?locale=${strapiLocale}&${populateQuery}&${paginationQuery}&${pageQuery}`)
    const data = await res.json()

    return {
        props: {
            data,
            currentPage: CURRENT_PAGE,
        },
        // revalidate: 10,
    }
}
