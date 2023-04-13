import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import ImageContainer from '@/components/atoms/ImageContainer'
import DiaryTitle from '@/components/atoms/DiaryTitle'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import DiaryCard from '@/components/molecules/DiaryCard'

const SlugDiary = () => {
    return (
        <main className='pb-16'>
            <div className='pb-16 768:pb-32'>
                <Container>
                    <Grid>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            <figure>
                                <ImageContainer src='/images/diary-card-1.png' aspectRatio='16/9' sizes='(min-width: 991px) 70vw, 100vw' />
                                <figcaption className='text-12 mt-2'>This is a caption</figcaption>
                            </figure>
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={5} offsetDesktop={2}>
                            <div className='my-12 768:my-16'>
                                <DiaryTitle title='Imprimir as fotografias. Sim ou não?' />
                            </div>
                        </Col>
                        <Col mobileCols={2} tabletCols={10} offsetTablet={1} desktopCols={8} offsetDesktop={2}>
                            <div className='diary-content'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eligendi non fugit nobis perferendis neque quae inventore?
                                Laboriosam, dolorum enim id harum voluptatum accusantium maiores architecto consequuntur odio, illum dolor?
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
