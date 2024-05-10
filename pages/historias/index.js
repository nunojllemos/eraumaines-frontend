import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import { Arrow, ExternalLink } from '@/components/atoms/Icons'
import { getImage } from '@/utils/utils'
import ImageContainer from '@/components/atoms/ImageContainer'
import useTranslation from '@/hooks/useTranslation'
import StoryCard from '@/components/organisms/StoryCard'

const Historias = ({ stories }) => {
    const t = useTranslation()
    const router = useRouter()
    const imagesDiv = useRef()
    const titlesDiv = useRef()
    const [isHoverImagesDiv, setIsHoverImagesDiv] = useState(false)
    const [isHoverTitlesDiv, setIsHoverTitlesDiv] = useState(false)
    const [newStoriesArray, setNewStoriesArray] = useState(...stories)

    const storiesCopy = useMemo(() => {
        console.log('inside')
        return new Array(...stories).reverse()
    }, [stories])

    useEffect(() => {
        const newArray = new Array(...stories)
        newArray.unshift({ attributes: { title: t.history.scroll } })
        newArray.unshift({ id: '-1', attributes: { title: '' } })
        newArray.unshift({ id: '-2', attributes: { title: '' } })
        newArray.unshift({ id: '-3', attributes: { title: '' } })

        setNewStoriesArray(newArray)
    }, [stories, t.history.scroll])

    useEffect(() => {
        titlesDiv.current.scrollTo({
            top: 9999,
            left: 0,
            behavior: 'instant',
        })
    }, [newStoriesArray])

    useEffect(() => {
        setTimeout(() => {
            handleScrollEnd()
        }, 500)
    }, [router.locale])

    const handleImagesScroll = () => {
        const titlesDivHeight = titlesDiv.current.getBoundingClientRect().height
        const titlesDivFirstChildHeight = titlesDiv.current.children[0].getBoundingClientRect().height
        const titlesDivTotalScrollValue = titlesDivFirstChildHeight - titlesDivHeight

        const imagesDivHeight = imagesDiv.current.getBoundingClientRect().height
        const imagesDivFirstChildHeight = imagesDiv.current.children[0].getBoundingClientRect().height
        const imagesDivTotalScrollValue = imagesDivFirstChildHeight - imagesDivHeight
        const imagesDivCurrentScrollTop = imagesDiv.current.scrollTop

        const percentage = imagesDivCurrentScrollTop / imagesDivTotalScrollValue

        !isHoverTitlesDiv && isHoverImagesDiv && titlesDiv.current.scrollTo(0, titlesDivTotalScrollValue - titlesDivTotalScrollValue * percentage)

        handleScrollEnd()
    }

    const handleTitleScroll = () => {
        const imagesDivHeight = imagesDiv.current.getBoundingClientRect().height
        const imagesDivFirstChildHeight = imagesDiv.current.children[0].getBoundingClientRect().height
        const imagesDivTotalScrollValue = imagesDivFirstChildHeight - imagesDivHeight

        const titlesDivHeight = titlesDiv.current.getBoundingClientRect().height
        const titlesDivFirstChildHeight = titlesDiv.current.children[0].getBoundingClientRect().height
        const titlesDivTotalScrollValue = titlesDivFirstChildHeight - titlesDivHeight
        const titlesDivCurrentScrollTop = titlesDiv.current.scrollTop

        const percentage = titlesDivCurrentScrollTop / titlesDivTotalScrollValue

        isHoverTitlesDiv && !isHoverImagesDiv && imagesDiv.current.scrollTo(0, imagesDivTotalScrollValue - imagesDivTotalScrollValue * percentage)

        handleScrollEnd()
    }

    const handleScrollEnd = () => {
        for (let i = 0; i < titlesDiv.current.children[0].children.length; i++) {
            const element = titlesDiv.current.children[0].children[i]

            if (innerWidth >= 1280 && element.getBoundingClientRect().top > 300 && element.getBoundingClientRect().top < 350) {
                element.classList.add('active')
            } else if (innerWidth < 1280 && element.getBoundingClientRect().top > 280 && element.getBoundingClientRect().top < 330) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        }
    }

    const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)

    return (
        <main className='mb-8 1024:mb-0'>
            <Container>
                <Grid desktop={1024}>
                    <Col
                        desktop={1024}
                        mobileCols={1}
                        tabletCols={6}
                        desktopCols={6}
                        className='hidden 1024:flex flex-col overflow-x-hidden relative text-40 1280:text-50'
                    >
                        <div
                            ref={titlesDiv}
                            className='h-[6.25em] font-power-grotesk leading-tight overflow-y-auto w-[calc(100%_+_16px)] scroll-smooth snap-y snap-mandatory shrink-0 after:block after:absolute after:bg-white/50 after:h-[5em] 1280:after:h-[5em] after:left-0 after:top-0 after:z-10 after:w-full'
                            onScroll={handleTitleScroll}
                            onMouseEnter={() => setIsHoverTitlesDiv(true)}
                            onMouseLeave={() => setIsHoverTitlesDiv(false)}
                        >
                            <div className='flex flex-col transition-all'>
                                {newStoriesArray.length > stories.length &&
                                    newStoriesArray.map(story => {
                                        const { id, attributes } = story
                                        const { title, location, category, slug } = attributes || {}
                                        const { name: categoryName } = category?.data?.attributes || {}

                                        return (
                                            <Link key={`stories-title-${id}`} href={`/historias/${slug}`} className='client-name'>
                                                <div className='relative w-max'>
                                                    <p className='snap-end bg-white z-10 w-max pr-2'>{title}</p>
                                                    <span className='info-drawer uppercase leading-none text-12 font-subjectivity absolute -z-10 left-full bottom-6 flex items-end gap-8 1280:gap-10'>
                                                        <span className='block w-8 1280:w-10 bg-white relative z-1 pr-2'>
                                                            <ExternalLink />
                                                        </span>
                                                        <span className='block whitespace-nowrap'>
                                                            {location && location}
                                                            {location && categoryName && ', '}
                                                            {categoryName && categoryName}
                                                        </span>
                                                    </span>
                                                </div>
                                            </Link>
                                        )
                                    })}
                            </div>
                        </div>
                    </Col>
                    <Col desktop={1024} mobileCols={2} tabletCols={12} desktopCols={6} className='overflow-x-hidden'>
                        <div
                            ref={imagesDiv}
                            className='1024:h-[calc(100vh_-_16rem)] overflow-y-auto 1024:w-[calc(100%_+_16px)] scroll-smooth snap-y snap-proximity'
                            onScroll={handleImagesScroll}
                            onMouseOver={() => setIsHoverImagesDiv(true)}
                            onMouseOut={() => setIsHoverImagesDiv(false)}
                        >
                            <div className='flex flex-col transition-all'>
                                <div className='aspect-[16/4.5] hidden 1024:flex items-end group'>
                                    <div className='w-full overflow-hidden relative'>
                                        <p className='uppercase text-10 1280:text-15 absolute top-1/2 -translate-y-1/2 group-hover:translate-x-24 1280:group-hover:translate-x-32 transition-transform duration-400'>
                                            scroll
                                            <br /> down
                                        </p>
                                        <div className='w-20 1280:w-28 rotate-90 bg-white p-6'>
                                            <div className='animate-up-down'>
                                                <Arrow />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {storiesCopy.map((story, index) => {
                                    const { id, attributes } = story
                                    const { cover, title, location, category, slug } = attributes
                                    const { name: categoryName } = category?.data?.attributes || {}
                                    const url = cover?.data?.attributes?.url
                                    const mime = cover?.data?.attributes?.mime

                                    return (
                                        <StoryCard
                                            key={`reverse-slide-${id}-${index}`}
                                            mime={mime}
                                            slug={slug}
                                            title={title}
                                            location={location}
                                            categoryName={categoryName}
                                            url={url}
                                        />
                                    )
                                })}
                                <div className='aspect-[16/4.5] hidden 1024:flex items-start group'>
                                    <div className='w-full overflow-hidden relative'>
                                        <p className='uppercase text-10 1280:text-15 absolute top-1/2 -translate-y-1/2 group-hover:translate-x-24 1280:group-hover:translate-x-32 transition-transform duration-400'>
                                            scroll
                                            <br /> up
                                        </p>
                                        <div className='w-20 1280:w-28 -rotate-90 bg-white p-6'>
                                            <div className='animate-up-down'>
                                                <Arrow />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default Historias

export async function getStaticProps(context) {
    const { locale } = context
    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const populateQuery = 'populate=*'
    const baseApi = process.env.NEXT_PUBLIC_API_URL
    const contentType = 'stories'
    const localeQuery = `locale=${strapiLocale}`

    const res = await fetch(`${baseApi}/${contentType}?${localeQuery}&${populateQuery}`)
    const data = await res.json()

    return {
        props: {
            stories: data.data,
        },
        revalidate: 10,
    }
}
