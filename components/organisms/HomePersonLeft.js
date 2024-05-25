import AboutSectionNameLink from '../molecules/AboutSectionNameLink'
import AboutDescription from '../molecules/AboutDescription'
import AboutPersonImage from '../molecules/AboutPersonImage'

const HomePersonLeft = ({ name, role, description, image, alt = '', href = '/nos' }) => {
    return (
        <div className='768:relative 768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] py-48'>
            <AboutSectionNameLink href={href} name={name} role={role} leftPerson />
            <AboutPersonImage name={name} href={href} image={image} alt={alt} leftPerson />
            <AboutDescription description={description} leftPerson />
        </div>
    )
}
export default HomePersonLeft
