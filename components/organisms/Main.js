import Video from '../atoms/Video'
import Grid from '../styled-components/layout/Grid'
import { Arrow } from '../atoms/Icons'
import Container from '../styled-components/layout/Container'

const Main = () => {
    return (
        <>
            <Video />
            <Container>
                <Grid>
                    <div className='text-80 text-white Maginia flex flex-col justify-end'>
                        <h2 className='font-maginia'>histórias com arte.</h2>
                        <div className='flex mt-20'>
                            <p className='text-20 font-subjectivity uppercase'>ver mais histórias</p>
                            <div className='w-7 ml-2'>
                                <Arrow />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Container>
        </>
    )
}

export default Main
