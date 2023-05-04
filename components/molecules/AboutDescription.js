import HomePersonDescription from '../atoms/HomePersonDescription'

const AboutDescription = props => {
    return (
        <div
            className={`row-start-3 my-12 768:my-0 col-span-2  768:col-span-6 768:row-start-2 ${props.leftPerson ? `768:col-start-7 1280:col-start-6` : ''} ${
                props.rightPerson ? `768:col-start-1` : ''
            }`}
        >
            <HomePersonDescription description={props.description} />
        </div>
    )
}
export default AboutDescription
