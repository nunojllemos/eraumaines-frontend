import ImageContainer from '../atoms/ImageContainer'

const WorkSectionMediaCard = ({ src, aspectRatio, alt = '', typeOfMedia }) => {
    return (
        <>
            {typeOfMedia?.includes('video') ? (
                <div>
                    <video muted autoPlay loop playsInline src={src} className='object-cover aspect-video'></video>
                </div>
            ) : (
                <div className='flex-grow'>
                    <ImageContainer sizes='100vw, (min-width: 768px) 45vw' src={src} aspectRatio={aspectRatio} alt={alt} />
                </div>
            )}
        </>
    )
}
export default WorkSectionMediaCard
