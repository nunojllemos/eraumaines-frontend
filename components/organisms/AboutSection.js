import AnimatedTitle from '../molecules/AnimatedTitle'
import Container from '../styled-components/layout/Container'
import Grid from '../styled-components/layout/Grid'
import { Arrow } from '../atoms/Icons'

const AboutSection = () => {
    return (
        <div className='pt-12'>
            <AnimatedTitle isPrimary>storytellers . storytellers . storytellers </AnimatedTitle>
            <Container>
                <div className='768:mb-20'>
                    <Grid>
                        {/* Inês */}
                        <div className='mb-12 col-span-2 768:col-start-7 768:col-span-4 768:row-start-1 1280:col-start-6 768:mb-0'>
                            <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none mb-3'>Inês</h2>
                            <p className='font-subjectivity default-text'>Fotografia & Edição</p>
                        </div>
                        <div className='col-span-2 row-start-2 768:col-start-1 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5'>
                            <div className='aspect-[2/3] relative'>
                                <img className='w-full h-full object-cover' src='https://source.unsplash.com/random?random' alt='Foto Inês' />
                                <div className='absolute bottom-1 flex 768:hidden '>
                                    <p className='default-text text-white  uppercase '>
                                        {/* TODO: retirar o default-text e saber qual é o font-size para cada breakpoint! */}
                                        Mais sobre a <span className='text-black'>Inês</span>
                                    </p>
                                    <div className='ml-2 w-7 h-max -rotate-45'>
                                        <Arrow />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-start-3 my-12 768:my-0  col-span-2 768:col-start-7 768:col-span-6 768:row-start-2 1280:col-start-6'>
                            <p className='text-32 768:text-44 1280:text-60 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab accusantium alias saepe.
                            </p>
                        </div>
                    </Grid>
                </div>

                <div className='768:mb-20'>
                    <Grid>
                        {/* Diogo */}

                        <div className='mb-12 col-span-2 768:col-start-1 768:col-span-4 768:row-start-1 768:mb-0'>
                            <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none mb-3'>Diogo</h2>
                            <p className='font-subjectivity default-text'>Video & Edição</p>
                        </div>
                        <div className='col-span-2 row-start-2 768:col-start-7 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5 1280:col-start-8'>
                            <div className='aspect-[2/3] relative'>
                                <img className='w-full h-full object-cover' src='https://source.unsplash.com/random?random' alt='Foto Inês' />
                                <div className='absolute bottom-1 flex 768:hidden'>
                                    <p className='default-text text-white  uppercase '>
                                        {/* TODO: retirar o default-text e saber qual é o font-size para cada breakpoint! */}
                                        Mais sobre a <span className='text-black'>Diogo</span>
                                    </p>
                                    <div className='ml-2 w-7 h-max -rotate-45'>
                                        <Arrow />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-start-3 my-12 768:my-0  col-span-2 768:col-start-1 768:col-span-6 768:row-start-2 '>
                            <p className='text-32 768:text-44 1280:text-60 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab accusantium alias saepe.
                            </p>
                        </div>
                    </Grid>
                </div>

                {/* <div className='mb-12 col-span-2 768:col-start-1 768:col-span-4 768:row-start-3'>
                        <h2 className='font-power-grotesk text-50 768:text-70 1280:text-90 leading-none mb-3'>Diogo</h2>
                        <p className='font-subjectivity default-text'>Video & Edição</p>
                    </div>
                    <div className='col-span-2 row-start-5 768:col-start-7 768:row-start-3 768:col-span-6 768:row-span-2 1280:col-span-5 1280:col-start-8'>
                        <div className='aspect-[2/3] relative'>
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
                    <div className='row-start-6 mt-12 mb-12 col-span-2 768:col-start-1 768:col-span-6 768:row-start-4 1280:col-start-1'>
                        <p className='text-32 768:text-44 1280:text-60 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab accusantium alias saepe.
                        </p>
                    </div> */}
            </Container>
        </div>
    )
}
export default AboutSection