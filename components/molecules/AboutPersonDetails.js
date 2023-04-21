import AboutPersonName from '@/atoms/AboutPersonName'
import AboutPersonRole from '@/atoms/AboutPersonRole'

const AboutPersonDetails = ({ name, role }) => {
    return (
        <>
            <AboutPersonName>{name}</AboutPersonName>
            <AboutPersonRole>{role}</AboutPersonRole>
        </>
    )
}
export default AboutPersonDetails
