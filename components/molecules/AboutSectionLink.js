import InternalLink from './InternalLink'

const AboutSectionLink = props => {
    return (
        <div className='hover-arrow flex pt-2'>
            <p className='text-32 text-white uppercase '>
                Mais sobre <span className='text-black'>{props.name}</span>
            </p>
            <InternalLink href={props.link} />
        </div>
    )
}
export default AboutSectionLink
