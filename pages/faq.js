import { Arrow } from '@/components/atoms/Icons'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import Image from 'next/image'
import Collapsible from 'react-collapsible'

const CollapsibleHeader = ({ text }) => {
    return (
        <div className='flex justify-between pt-8'>
            <h2 className='text-26'>{text}</h2>
            <div className='w-8'>
                <Arrow />
            </div>
        </div>
    )
}

const faq = () => {
    const collapsibleOptions = {
        transitionTime: 350,
        easing: 'cubic-bezier(.24,.16,0,.95)',
        trigger: <CollapsibleHeader text='Example' />,
    }
    return (
        <main className='pb-8'>
            <AnimatedTitle>faq . faq . faq . faq . faq . faq . faq . faq . faq .</AnimatedTitle>
            <Container>
                <Grid>
                    <Col tabletCols={6}>
                        <div className='relative w-full aspect-[2/3]'>
                            <Image src='https://source.unsplash.com/random' alt='' fill={true} />
                        </div>
                    </Col>
                    <Col tabletCols={6}>
                        <div className='flex flex-col '>
                            <Collapsible {...collapsibleOptions}>
                                <p className='text-18'></p>
                                <p className='text-18'>This is the collapsible content. It can be any element or React component you like.</p>
                            </Collapsible>
                        </div>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}
export default faq
