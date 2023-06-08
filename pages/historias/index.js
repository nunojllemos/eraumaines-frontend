import React, { useRef, useEffect, useState } from 'react'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import { ExternalLink } from '@/components/atoms/Icons'

const Historias = () => {
    const imagesDiv = useRef()
    const titlesDiv = useRef()
    const [isHoverImagesDiv, setIsHoverImagesDiv] = useState(false)
    const [isHoverTitlesDiv, setIsHoverTitlesDiv] = useState(false)

    const stories = [
        {
            name: 'Nuno e Ana',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-1',
            date: '14-05-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Miguel e Joana',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Lisboa',
            category: 'Photoshoot',
            slug: 'historias/single-2',
            date: '23-06-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Paula e José',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Leiria',
            category: 'Photoshoot',
            slug: 'historias/single-3',
            date: '4-02-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Nuno e Ana',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-1',
            date: '14-05-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Miguel e Joana',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Lisboa',
            category: 'Photoshoot',
            slug: 'historias/single-2',
            date: '23-06-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Paula e José',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Leiria',
            category: 'Photoshoot',
            slug: 'historias/single-3',
            date: '4-02-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Nuno e Ana',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-1',
            date: '14-05-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Miguel e Joana',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Lisboa',
            category: 'Photoshoot',
            slug: 'historias/single-2',
            date: '23-06-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Paula e José',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Leiria',
            category: 'Photoshoot',
            slug: 'historias/single-3',
            date: '4-02-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Nuno e Ana',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-1',
            date: '14-05-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Miguel e Joana',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Lisboa',
            category: 'Photoshoot',
            slug: 'historias/single-2',
            date: '23-06-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Paula e José',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Leiria',
            category: 'Photoshoot',
            slug: 'historias/single-3',
            date: '4-02-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Bruna e Rafael',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Porto',
            category: 'Casamento',
            slug: 'historias/single-4',
            date: '1-2-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Tiago',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Algarve',
            category: 'Batizado',
            slug: 'historias/single-5',
            date: '1-05-2023',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
        {
            name: 'Fábio e Catarina',
            album: 'https://gordonvonsteiner.com/wp-content/uploads/2020/06/clips_10.mp4',
            place: 'Aves',
            category: 'Casamento',
            slug: 'historias/single-6',
            date: '2-03-2020',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi',
        },
    ]

    const storiesCopy = new Array(...stories)
    stories.unshift({ name: '' })
    stories.unshift({ name: '' })
    stories.unshift({ name: '' })
    stories.unshift({ name: '' })
    stories.unshift({ name: '' })

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

        !isHoverImagesDiv && isHoverTitlesDiv && imagesDiv.current.scrollTo(0, imagesDivTotalScrollValue - imagesDivTotalScrollValue * percentage)

        handleScrollEnd()
    }

    const handleScrollEnd = () => {
        for (let i = 0; i < titlesDiv.current.children[0].children.length; i++) {
            const element = titlesDiv.current.children[0].children[i]

            if (element.getBoundingClientRect().top > 300 && element.getBoundingClientRect().top < 350) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        }
    }

    const playVideo = e => {
        if (e.currentTarget.children[0]) {
            const video = e.currentTarget.children[0]

            video.play()
        }
    }

    const stopVideo = e => {
        if (e.currentTarget.children[0]) {
            const video = e.currentTarget.children[0]

            video.pause()
            video.currentTime = 0
        }
    }

    const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)

    return (
        <main>
            <Container>
                <Grid>
                    <Col mobileCols={1} tabletCols={6} desktopCols={6} className='hidden 768:flex overflow-x-hidden relative text-50'>
                        <div
                            ref={titlesDiv}
                            className='h-[6.25em] font-power-grotesk leading-tight overflow-y-auto w-[calc(100%_+_16px)] scroll-smooth snap-y snap-mandatory shrink-0 after:block after:absolute after:bg-white/50 after:h-[5em] after:left-0 after:top-0 after:z-10 after:w-full'
                            onScroll={handleTitleScroll}
                            onMouseEnter={() => setIsHoverTitlesDiv(true)}
                            onMouseLeave={() => setIsHoverTitlesDiv(false)}
                        >
                            <div className='flex flex-col transition-all'>
                                {stories.map((el, i) => {
                                    return (
                                        <div key={i} className='client-name relative w-max'>
                                            <p key={i} className='snap-end bg-white z-10 w-max pr-2'>
                                                {el.name}
                                            </p>
                                            <span className='info-drawer uppercase leading-none text-12 font-subjectivity absolute -z-10 left-full bottom-6 flex items-end gap-10'>
                                                <span className='block w-10 bg-white relative z-1 pr-2'>
                                                    <ExternalLink />
                                                </span>
                                                <span className='block whitespace-nowrap'>
                                                    {el.place}, {el.category}
                                                </span>
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col mobileCols={2} tabletCols={6} desktopCols={6} className='overflow-x-hidden'>
                        <div
                            ref={imagesDiv}
                            className='h-[calc(100vh_-_16rem)] overflow-y-auto 768:w-[calc(100%_+_16px)] scroll-smooth snap-y snap-proximity'
                            onScroll={handleImagesScroll}
                            onMouseEnter={() => setIsHoverImagesDiv(true)}
                            onMouseLeave={() => setIsHoverImagesDiv(false)}
                        >
                            <div className='flex flex-col transition-all'>
                                {storiesCopy.reverse().map((el, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onMouseEnter={playVideo}
                                            onMouseLeave={stopVideo}
                                            className='text-32 my-12 768:my-6 aspect-video relative flex items-center justify-center bg-black/10 snap-center'
                                        >
                                            <video
                                                onClick={e => {
                                                    const isPlaying = isVideoPlaying(e.target)
                                                    if (isPlaying) {
                                                        e.target.currentTime = 0
                                                        e.target.pause()
                                                    } else {
                                                        e.target.play()
                                                    }
                                                }}
                                                muted
                                                playsInline
                                                loop
                                                src={el.album}
                                            ></video>
                                            <span className='768:hidden absolute font-power-grotesk top-[calc(100%_+_6px)] left-0 block text-16'>
                                                {el.name}
                                            </span>
                                            <span className='768:hidden absolute top-[calc(100%_+_1rem)] right-0 block text-12 uppercase'>
                                                {el.place}, {el.category}
                                            </span>
                                        </div>
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
