import ImageContainer from '@/components/atoms/ImageContainer'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'

const termos = () => {
    return (
        <main className='pb-16'>
            <AnimatedTitle>termos . termos . termos . termos . termos . termos . termos . </AnimatedTitle>
            <Container>
                <Grid tablet={800}>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='sticky top-8'>
                            <ImageContainer src='/images/terms-banner.jpg' aspectRatio='1/1' sizes='(min-width: 800px) 50vw, 100vw' />
                        </div>
                    </Col>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='terms-content text-16 768:text-18'>
                            <h2>Geral</h2>
                            <p>
                                <em>Facilisis sed odio morbi quis</em>. Et sollicitudin ac orci phasellus egestas tellus rutrum. Malesuada fames ac turpis
                                egestas. Tellus at urna condimentum mattis pellentesque. Dictumst vestibulum rhoncus est pellentesque. Nullam eget felis eget
                                nunc lobortis. Quis eleifend quam <b>adipiscing</b> vitae. Eget nunc scelerisque viverra mauris in aliquam. Tellus elementum
                                sagittis vitae et leo. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sed libero enim sed faucibus turpis in
                                eu mi.
                            </p>
                            <p>
                                Facilisis sed odio morbi quis. Et sollicitudin ac orci phasellus egestas tellus rutrum. Malesuada fames ac turpis egestas.
                                Tellus at urna condimentum mattis pellentesque.
                            </p>
                            <h2>Reembolsos</h2>
                            <p>
                                Facilisis sed odio morbi quis. Et sollicitudin ac orci phasellus egestas tellus rutrum. Malesuada fames ac turpis egestas.
                                Tellus at urna condimentum mattis pellentesque. Dictumst vestibulum rhoncus est pellentesque. Nullam eget felis eget nunc
                                lobortis.
                            </p>
                            <h2>Mais um título qualquer</h2>
                            <p>
                                Facilisis sed odio morbi quis. Et sollicitudin ac orci phasellus egestas tellus rutrum. Malesuada fames ac turpis egestas.
                                Tellus at urna condimentum mattis pellentesque. Dictumst vestibulum rhoncus est pellentesque. Nullam eget felis eget nunc
                                lobortis.
                                <br />
                                Tellus at urna condimentum mattis pellentesque. Dictumst vestibulum rhoncus est pellentesque. Nullam eget felis eget nunc
                                lobortis.
                            </p>
                            <h2>Mais um título qualquer</h2>
                            <p>
                                Facilisis sed odio morbi quis. Et sollicitudin ac orci phasellus egestas tellus rutrum. Malesuada fames ac turpis egestas.
                                Tellus at urna condimentum mattis pellentesque. Dictumst vestibulum rhoncus est pellentesque. Nullam eget felis eget nunc
                                lobortis.
                                <br />
                                Tellus at urna condimentum mattis pellentesque. Dictumst vestibulum rhoncus est pellentesque. Nullam eget felis eget nunc
                                lobortis.
                            </p>
                            <h2>Mais um título qualquer</h2>
                            <p>
                                <b>Facilisis sed odio morbi quis.</b> Et sollicitudin ac orci phasellus egestas tellus rutrum. Malesuada fames ac turpis
                                egestas. Tellus at urna condimentum mattis pellentesque. Dictumst vestibulum rhoncus est pellentesque. Nullam eget felis eget
                                nunc lobortis. Quis eleifend quam adipiscing vitae. Eget nunc scelerisque viverra mauris in aliquam. Tellus elementum sagittis
                                vitae et leo. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sed libero enim sed faucibus turpis in eu mi.
                            </p>
                            <p>
                                Facilisis sed odio morbi quis. Et sollicitudin ac orci phasellus egestas tellus rutrum. Malesuada fames ac turpis egestas.
                                Tellus at urna condimentum mattis pellentesque.
                            </p>
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default termos
