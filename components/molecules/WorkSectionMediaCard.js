import ImageContainer from '../atoms/ImageContainer'

const WorkSectionMediaCard = props => {
    return (
        <div>
            <ImageContainer src={props.src} aspectRatio={props.aspectRatio} alt={props.alt} />
        </div>
    )
}
export default WorkSectionMediaCard
