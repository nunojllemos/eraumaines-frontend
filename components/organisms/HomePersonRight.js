import AboutSectionNameLink from '@/molecules/AboutSectionNameLink'
import AboutDescription from '@/molecules/AboutDescription'
import AboutPersonImage from '@/molecules/AboutPersonImage'

const HomePersonRight = ({ name, role, description, image, alt = '', href = '/nos' }) => {
    return (
        <div className='home-person-right 768:relative 768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] 1024:py-48'>
            <AboutSectionNameLink href={href} name={name} role={role} rightPerson />
            <AboutPersonImage href={href} name={name} image={image} alt={alt} rightPerson />
            <AboutDescription description={description} rightPerson />
        </div>
    )
}
export default HomePersonRight
