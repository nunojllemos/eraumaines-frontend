import Head from 'next/head'
import Container from '@/layout/Container'
import Col from '@/layout/Col'
import Grid from '@/layout/Grid'
import Seo from '@/components/atoms/Seo'
import Main from '@/components/organisms/Main'

export default function Home({ data }) {
    // const { hero_title } = data.attributes

    return (
        <>
            <Seo title='Era Uma Inês - Home' />
            <main className=''>
                <Main />
                {/* <Container>
                    <Main />
                    <h1>{hero_title}</h1>
                    <Grid mobileCols={2} tabletCols={12} desktopCols={12}>
                        <Col>1</Col>
                    </Grid>
                </Container>
                 <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad esse animi vel tempora laboriosam doloribus in, quod assumenda fugit rerum
                    praesentium, unde maiores nisi voluptatem eveniet officia voluptas rem. Ipsam?
                </p>  */}
            </main>
        </>
    )
}

export async function getStaticProps(context) {
    // const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`)
    //     .then(res => res.json())
    //     .then(data => data)

    return {
        // props: data,
        props: {},
    }
}
