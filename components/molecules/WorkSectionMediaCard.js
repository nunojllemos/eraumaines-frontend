import ImageContainer from '../atoms/ImageContainer'

const WorkSectionMediaCard = ({ src, aspectRatio, alt = '', typeOfMedia }) => {
    return (
        <div className='h-full'>
            {typeOfMedia.includes('video') ? (
                <video muted autoPlay loop playsInline src={src} className='h-full object-cover aspect-video'></video>
            ) : (
                <ImageContainer sizes='100vw, (min-width: 768px) 45vw' src={src} aspectRatio={aspectRatio} alt={alt} />
            )}
        </div>
    )
}
export default WorkSectionMediaCard
