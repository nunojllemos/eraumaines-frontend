import ImageContainer from '../atoms/ImageContainer'

const WorkSectionMediaCard = props => {
    return (
        <div className='mb-8'>
            <ImageContainer sizes='100vw, (min-width: 768px) 45vw' src={props.src} aspectRatio={props.aspectRatio} alt={props.alt} />
        </div>
    )
}
export default WorkSectionMediaCard
