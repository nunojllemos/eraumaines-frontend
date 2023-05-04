import AboutSectioNameLink from '../molecules/AboutSectionNameLink'
import AboutDescription from '../molecules/AboutDescription'
import AboutPersonImage from '../molecules/AboutPersonImage'

const HomePersonRight = ({ name, role, description, image, alt = '', href = '/nos' }) => {
    return (
        <div className='768:relative 768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] '>
            <AboutSectioNameLink href='/nos' name='Diogo' role='Vídeo & Edição' rightPerson />
            <AboutPersonImage href='/nos' rightPerson />
            <AboutDescription rightPerson />
        </div>
    )
}
export default HomePersonRight
