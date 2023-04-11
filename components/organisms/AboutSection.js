import AnimatedTitle from '../molecules/AnimatedTitle'
import Container from '../styled-components/layout/Container'
import Grid from '../styled-components/layout/Grid'
import { Arrow } from '../atoms/Icons'

const AboutSection = () => {
    return (
        <div className='pt-12'>
            <AnimatedTitle isPrimary>storytellers . storytellers . storytellers </AnimatedTitle>
            <Container>
                <Grid>
                    <div className='mb-12'>
                        <h2 className='font-power-grotesk text-50 leading-none mb-1'>Inês</h2>
                        <p className='font-subjectivity text-16'>Fotografia</p>
                    </div>
                    <div className='col-span-2 row-start-2 '>
                        <div className='aspect-[9/16] relative'>
                            <img className='w-full h-full object-cover' src='https://source.unsplash.com/random?random' alt='Foto Inês' />
                            <div className='absolute bottom-1 flex'>
                                <p className='default-text text-white  uppercase '>
                                    Mais sobre a <span className='text-black'>Inês</span>
                                </p>
                                <div className='ml-2 w-7 h-max -rotate-45'>
                                    <Arrow />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row-start-3 mt-12 mb-12  col-span-2'>
                        <p className='text-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore est unde quibusdam distinctio?</p>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}
export default AboutSection
