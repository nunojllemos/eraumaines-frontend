import ImageContainer from '@/components/atoms/ImageContainer'
import AccordionItem from '@/components/molecules/AccordionItem'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import { getImage } from '@/utils/utils'

const Faq = ({ data }) => {
    const { title, media, faqs } = data
    const { url } = media.data?.attributes || {}

    return (
        <main className='pb-16'>
            {title && <AnimatedTitle>{`${title} . ${title} . ${title} . ${title} . ${title} . ${title} . ${title} . ${title} . ${title} .`}</AnimatedTitle>}
            <Container>
                <Grid tablet={800}>
                    {url && (
                        <Col tablet={800} mobileCols={2} tabletCols={6}>
                            <div className='sticky top-8'>
                                <ImageContainer src={getImage(url)} aspectRatio='1/1' sizes='(min-width: 800px) 50vw, 100vw' />
                            </div>
                        </Col>
                    )}
                    {faqs.length > 0 && (
                        <Col tablet={800} mobileCols={2} tabletCols={6}>
                            <div className='flex flex-col'>
                                {faqs.map(faq => {
                                    const { id, question, answer } = faq
                                    return <AccordionItem key={`faq-${id}`} title={question} content={answer} />
                                })}
                            </div>
                        </Col>
                    )}
                </Grid>
            </Container>
        </main>
    )
}
export default Faq

export async function getStaticProps(context) {
    const { locale } = context
    let strapiLocale

    if (locale === 'pt') strapiLocale = 'pt-PT'
    if (locale === 'en') strapiLocale = 'en'

    const populateQuery = 'populate=*'
    const baseApi = process.env.NEXT_PUBLIC_API_URL
    const contentType = 'faq'
    const localeQuery = `locale=${strapiLocale}`

    const res = await fetch(`${baseApi}/${contentType}?${localeQuery}&${populateQuery}`)
    const data = await res.json()

    return {
        props: {
            data: data.data.attributes,
        },
        revalidate: 10,
    }
}
