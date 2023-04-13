import ImageContainer from '@/components/atoms/ImageContainer'
import AccordionItem from '@/components/molecules/AccordionItem'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'

const faq = () => {
    const dummy_faqs = [
        {
            title: 'Posso ser reembolsado por algum motivo?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Trabalham em todo o país?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Fazem sessões de solteiro?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Já não sei mais o que perguntar?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Facilisis sed odio morbi quis',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fort',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Posso ser reembolsado por algum motivo?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Trabalham em todo o país?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Fazem sessões de solteiro?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Já não sei mais o que perguntar?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Facilisis sed odio morbi quis',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fort',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Posso ser reembolsado por algum motivo?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Trabalham em todo o país?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Fazem sessões de solteiro?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Já não sei mais o que perguntar?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Facilisis sed odio morbi quis',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fort',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam incidunt, magnam laudantium modi a eligendi blanditiis ea ad, quo labore pariatur illo cupiditate maxime fuga, perferendis assumenda similique suscipit eveniet.',
        },
    ]

    return (
        <main className='pb-16'>
            <AnimatedTitle>faq . faq . faq . faq . faq . faq . faq . faq . faq .</AnimatedTitle>
            <Container>
                <Grid tablet={800}>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='sticky top-8'>
                            <ImageContainer src='/images/faq-banner.jpg' aspectRatio='1/1' sizes='100vw, (min-width: 800px) 50vw' />
                        </div>
                    </Col>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='flex flex-col'>
                            {dummy_faqs.map((faq, index) => {
                                const { title, text } = faq
                                return <AccordionItem key={index} title={title} content={text} />
                            })}
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default faq
