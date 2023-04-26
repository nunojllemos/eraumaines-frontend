import ImageContainer from '../atoms/ImageContainer'

const WorkSectionMediaCard = props => {
    return (
        <div className='mb-8'>
            <ImageContainer src={props.src} aspectRatio={props.aspectRatio} alt={props.alt} />
        </div>
    )
}
export default WorkSectionMediaCard
