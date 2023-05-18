import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import ImageContainer from '@/components/atoms/ImageContainer'
import DiaryTitle from '@/components/atoms/DiaryTitle'
import ReactMarkdown from 'react-markdown'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import WorkSectionInfoCard from '@/components/molecules/WorkSectionInfoCard'

const slugHistorias = () => {
    const historias = [
        {
            name: 'Nuno e Ana',
            album: '/images/work-section-card-4.png',
            local: 'Porto',
            work: 'Casamento',
            slug: 'historias/single-1',
            date: '14-05-2022',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, aliquid placeat impedit culpa sint praesentium animi numquam fugit deleniti sequi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aliquid necessitatibus quisquam corrupti laborum minima odio, excepturi asperiores explicabo iure rerum mollitia provident omnis ullam, fugiat sapiente enim doloribus culpa. Lorem ipsum dolor sit amet, ',
            description2:
                'Consectetur adipisicing elit. Rerum voluptas tempore voluptatibus molestiae fuga culpa aliquam dolorem officiis doloremque similique recusandae quasi, nemo accusantium sint libero, rem exercitationem aut id.',
        },
    ]

    return (
        <main className='py-16'>
            <div className='pb-16 768:pb-32'>
                <Container>
                    {historias.map((historia, i) => {
                        return (
                            <Grid key={i}>
                                <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                                    <div className='text-14 text-black/50 mb-3'>
                                        <span>Publicado em {historia.date} </span>
                                    </div>
                                </Col>
                                <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                                    <figure>
                                        <ImageContainer src={historia.album} aspectRatio='16/9' sizes='(min-width: 991px) 70vw, 100vw' />
                                        <figcaption className='text-12 mt-2'></figcaption>
                                    </figure>
                                </Col>
                                <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={5} offsetDesktop={2}>
                                    <div className='my-12 768:my-16'>
                                        <DiaryTitle title={historia.name} />
                                        <div className='text-18 font-light font-subjectivity'>
                                            <p>{historia.work}</p>
                                            <p>{historia.local}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                                    <div className='diary-content'>
                                        <ReactMarkdown>{historia.description}</ReactMarkdown>
                                    </div>
                                </Col>
                                <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                                    <div className='diary-content mb-16'>
                                        <ReactMarkdown>{historia.description2}</ReactMarkdown>
                                    </div>
                                </Col>
                                <Col mobileCols={2} tabletCols={8} offsetTablet={2} desktopCols={6} offsetDesktop={3}>
                                    <figure>
                                        <ImageContainer src={historia.album} aspectRatio='16/9' sizes='(min-width: 991px) 70vw, 100vw' />
                                        <figcaption className='text-12 mt-2'></figcaption>
                                    </figure>
                                </Col>
                                <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                                    <div className='diary-content mb-16'>
                                        <ReactMarkdown>{historia.description2}</ReactMarkdown>
                                    </div>
                                </Col>
                            </Grid>
                        )
                    })}
                </Container>
            </div>

            <AnimatedTitle>mais histórias . mais histórias . mais histórias . </AnimatedTitle>
            <Container>
                <Grid rowGap={3}>
                    {historias.map((historia, i) => {
                        return (
                            <>
                                <Col key={i} mobileCols={2} tabletCols={4}>
                                    <WorkSectionInfoCard
                                        work={historia.work}
                                        src={historia.album}
                                        aspectRatio='16/9'
                                        local={historia.local}
                                        engaged={historia.name}
                                    />
                                </Col>
                                <Col key={i} mobileCols={2} tabletCols={4}>
                                    <WorkSectionInfoCard
                                        work={historia.work}
                                        src={historia.album}
                                        aspectRatio='16/9'
                                        local={historia.local}
                                        engaged={historia.name}
                                    />
                                </Col>
                                <Col key={i} mobileCols={2} tabletCols={4}>
                                    <WorkSectionInfoCard
                                        work={historia.work}
                                        src={historia.album}
                                        aspectRatio='16/9'
                                        local={historia.local}
                                        engaged={historia.name}
                                    />
                                </Col>
                            </>
                        )
                    })}
                </Grid>
            </Container>
        </main>
    )
}

export default slugHistorias
