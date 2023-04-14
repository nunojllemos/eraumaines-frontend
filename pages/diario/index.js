import { useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Col from '@/components/styled-components/layout/Col'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import DiaryCard from '@/components/molecules/DiaryCard'

const Diario = ({ data }) => {
    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <main className='pb-16'>
            <AnimatedTitle>diário . diário . diário . diário . diário . </AnimatedTitle>
            <Container>
                <Grid rowGap={2}>
                    <Col mobileCols={2} tabletCols={8}>
                        <div className='flex flex-col gap-8'>
                            {data[0] && (
                                <DiaryCard
                                    src={data[0].attributes?.cover?.data?.attributes?.url}
                                    aspectRatio='16/9'
                                    title='Imprimir as fotografias. Sim ou não?'
                                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus repellendus architecto. Quidem, distinctio temps? Iusto nisi. Esse rem doloribus eum laborum quia, perferendis earum ea praesentium saepe. Vero, unde?'
                                />
                            )}
                            <DiaryCard
                                src='/images/diary-card-3.png'
                                aspectRatio='16/9'
                                title='Sessões de Natal 🎄'
                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus repellendus architecto. Quidem, distinctio temps? Iusto nisi. Esse rem doloribus eum laborum quia, perferendis earum ea praesentium saepe. Vero, unde?'
                            />
                        </div>
                    </Col>

                    <Col mobileCols={2} tabletCols={4}>
                        <div className='flex flex-col gap-8 h-full'>
                            <DiaryCard src='/images/diary-card-2.png' aspectRatio='4/3' title='Imprimir as fotografias.' />
                            <div className='aspect-square 768:flex-1 relative'>
                                <Image className='object-contain' src='/images/octopus.gif' alt='' fill={true} />
                            </div>
                        </div>
                    </Col>

                    <Col mobileCols={2} tabletCols={6}>
                        <div className='flex flex-col gap-8'>
                            <div className='aspect-video bg-[gold]/50'>1</div>
                            <div className='aspect-[4/3] bg-[grey]/30'>2</div>
                        </div>
                    </Col>

                    <Col mobileCols={2} tabletCols={6}>
                        <div className='flex flex-col gap-8 h-full'>
                            <div className='aspect-[4/3] bg-[blue]/30'>3</div>
                            <div className='aspect-square 768:aspect-auto 768:flex-1 bg-[green]/50'>4</div>
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default Diario

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV || process.env.NEXT_PUBLIC_API_URL}/posts?populate=*`)
    const data = await res.json()

    return {
        props: data,
    }
}
