import Container from '@/layout/Container'
import AnimatedTitle from '@/molecules/AnimatedTitle'
import HomePersonLeft from './HomePersonLeft'
import HomePersonRight from './HomePersonRight'

const AboutSection = ({ title, persons }) => {
    console.log(persons)
    return (
        persons.length > 0 && (
            <div className='pt-12'>
                <AnimatedTitle isPrimary={false}>
                    {title} . {title} . {title} . {title} .
                </AnimatedTitle>
                <Container>
                    {persons.map((person, i) => {
                        return i % 2 !== 0 ? <HomePersonRight /> : <HomePersonLeft />
                    })}
                </Container>
            </div>
        )
    )
}
export default AboutSection
