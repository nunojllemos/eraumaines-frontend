import { useRef, useEffect, useState } from 'react'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'

const Historias = () => {
    const imagesDiv = useRef()
    const titlesDiv = useRef()
    const [isHoverImagesDiv, setIsHoverImagesDiv] = useState(false)
    const [isHoverTitlesDiv, setIsHoverTitlesDiv] = useState(false)

    const stories = [
        {
            name: 'Nuno e Ana',
            album: '/images/work-section-card-4.png',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-1',
            date: '14-05-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Miguel e Joana',
            album: '/images/work-section-card-6.png',
            place: 'Lisboa',
            category: 'Photoshoot',
            slug: 'historias/single-2',
            date: '23-06-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Paula e José',
            album: '/images/work-section-card-4.png',
            place: 'Leiria',
            category: 'Photoshoot',
            slug: 'historias/single-3',
            date: '4-02-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: '/images/her-image.png',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: '/images/his-image.png',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: '/images/work-section-card-6.png',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: '/images/her-image.png',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: '/images/his-image.png',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: '/images/work-section-card-6.png',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
    ]

    // const storiesReverse = new Array(...stories)
    // storiesReverse.reverse()
    // storiesReverse.unshift(stories[0])
    // storiesReverse.pop()

    const arr = new Array(...stories)

    console.log('stories: ', stories)
    console.log('stories reverse: ', arr)

    useEffect(() => {
        titlesDiv.current.scrollTo({
            top: 9999,
            left: 0,
            behavior: 'instant',
        })
    }, [])

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

        !isHoverImagesDiv && isHoverTitlesDiv && imagesDiv.current.scrollTo(0, imagesDivTotalScrollValue - imagesDivTotalScrollValue * percentage)
    }

    return (
        <main>
            <Container>
                <Grid>
                    <Col mobileCols={1} tabletCols={6} desktopCols={6} className='overflow-x-hidden flex'>
                        <div
                            ref={titlesDiv}
                            className='h-[3em] text-60 font-power-grotesk leading-none overflow-y-auto w-[calc(100%_+_16px)] scroll-smooth snap-y snap-mandatory shrink-0'
                            onScroll={handleTitleScroll}
                            onMouseEnter={() => setIsHoverTitlesDiv(true)}
                            onMouseLeave={() => setIsHoverTitlesDiv(false)}
                        >
                            <div className='flex flex-col transition-all'>
                                {stories.map((el, i) => {
                                    return (
                                        <p key={i} className='uppercase leading-none flex items-center justify-center bg-black/30 snap-end'>
                                            {el.name}-{i}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col mobileCols={1} tabletCols={6} desktopCols={6} className='overflow-x-hidden'>
                        <div
                            ref={imagesDiv}
                            className='h-[calc(100vh_-_16rem)] overflow-y-auto w-[calc(100%_+_16px)] scroll-smooth snap-y snap-mandatory'
                            onScroll={handleImagesScroll}
                            onMouseEnter={() => setIsHoverImagesDiv(true)}
                            onMouseLeave={() => setIsHoverImagesDiv(false)}
                        >
                            <div className='flex flex-col gap-12 transition-all'>
                                {arr.reverse().map((el, i) => {
                                    return (
                                        <p key={i} className='text-32 uppercase aspect-video flex items-center justify-center bg-black/10 snap-center'>
                                            {el.name}-{i}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default Historias
